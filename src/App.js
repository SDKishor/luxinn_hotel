import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AboutPage } from "./pages/AboutPage";
import { GalleryPage } from "./pages/GalleryPage";
import { Home } from "./pages/Home";
import { OrderPage } from "./pages/OrderPage";
import { RestaurantPage } from "./pages/RestaurantPage";
import { RoomsPage } from "./pages/RoomsPage";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/rooms" element={<RoomsPage></RoomsPage>} />
        <Route path="/restaurant" element={<RestaurantPage></RestaurantPage>} />
        <Route path="/gallery" element={<GalleryPage></GalleryPage>} />
        <Route path="/about" element={<AboutPage></AboutPage>} />
        <Route path="/order" element={<OrderPage></OrderPage>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
