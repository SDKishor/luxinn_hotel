import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { OrderCard } from "../components/OrderCard";
import { SmallRoomCard } from "../components/SmallRoomCard";

export const OrderPage = ({ initialcart = [] }) => {
  const [cart, setCart] = useState(initialcart);
  const [allroomsData, setAllroomsData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const location = useLocation();
  let temp = location.state;
  temp.quantity = 1;

  const setTotal = (newCart) => {
    let total = newCart
      .map((data) => {
        return data.Price * data.quantity;
      })
      .reduce((a, b) => a + b, 0);
    return total;
  };

  useEffect(() => {
    fetch("./dummyData.json")
      .then((res) => res.json())
      .then((data) => setAllroomsData(data.rooms.allRooms));

    setCart([temp]);
    let x = setTotal([temp]);
    setTotalPrice(x);
  }, [temp]);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);

    setTotalPrice(setTotal(newCart));
  };

  const handleMinusfromCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);

    const rest = cart.filter((product) => product.id !== selectedProduct.id);
    exists.quantity = exists.quantity - 1;
    newCart = [...rest, exists];

    setCart(newCart);
  };

  const handleRemoveItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    setTotalPrice(setTotal(remaining));
  };

  return (
    <main className="w-full flex flex-col items-center justify-center">
      {cart.length === 0 ? (
        <div className="text-center m-20 text-3xl font-bold text-primary ">
          No Items on Cart
        </div>
      ) : (
        <section className="w-10/12 max-w-[1600px] mb-16 max-md:w-full ">
          <div className="flex items-center justify-center gap-20 text-xl font-bold h-16  border-solid border-t-2 border-b-2 border-primary my-5">
            <h2 className="flex-grow max-md:hidden">Rooms</h2>
            <h2 className="max-md:hidden">Unit Price</h2>
            <h2 className="max-md:hidden">Quantity</h2>
            <h2 className="pr-14 max-md:hidden">Price</h2>
            <h2 className="text-3xl md:hidden">Current Order</h2>
          </div>
          {cart.map((data, index) => (
            <OrderCard
              key={index}
              name={data.name}
              price={data.Price}
              photoUrl={data.photoUrl}
              roomCapacity={data.roomCapacity}
              roomSize={data.roomSize}
              roomData={data}
              quantity={data.quantity}
              handleAddToCart={handleAddToCart}
              handleMinusfromCart={handleMinusfromCart}
              handleRemoveItem={handleRemoveItem}
              lastItem={index + 1 === cart.length}
            />
          ))}

          <div className="flex  md:flex-col  items-end max-md:items-center max-md:w-full max-md:border-solid max-md:border-t-2 max-md:border-b-2 max-md:border-primary ">
            <div className=" flex items-center justify-end max-md:justify-center text-xl font-bold h-16  md:border-solid md:border-t-2 md:border-b-2 md:border-primary my-5 w-full max-md:w-1/2 max-md:my-3">
              <div className="">
                Total: <span className="mx-14 max-md:mx-5">${totalPrice}</span>
              </div>
            </div>
            <button className="text-2xl font-bold bg-primary py-5 px-10 rounded-md text-base-100 w-[350px] max-md:text-sm max-md:w-[200px] max-md:px-5 max-md:ml-6 max-md:mr-2 max-sm:ml-0 cursor-pointer">
              Chack Out (${totalPrice}){" "}
              <FontAwesomeIcon icon={faLocationArrow} />
            </button>
          </div>
        </section>
      )}

      <section className="w-10/12 max-w-[1600px] mb-16 relative">
        <h1 className="font-[lora] mb-12 max-md:text-center max-md:font-bold max-md:text-2xl text-4xl font-bold max-md:mt-0 ">
          More Rooms
        </h1>
        <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8">
          {allroomsData.map((data, index) => (
            <SmallRoomCard
              key={index}
              name={data.name}
              price={data.Price}
              photoUrl={data.photoUrl}
              roomData={data}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
