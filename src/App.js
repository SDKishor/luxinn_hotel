import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AboutPage } from "./pages/AboutPage";
import { GalleryPage } from "./pages/GalleryPage";
import { Home } from "./pages/Home";
import { OrderPage } from "./pages/OrderPage";
import { RestaurantPage } from "./pages/RestaurantPage";
import { RoomsPage } from "./pages/RoomsPage";
import { AdminPage } from "./admin/AdminPage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { LoginPage } from "./pages/LoginPage";

function App() {
  const onAdminPage = useLocation().pathname.split("/")[1] === "admin";

  const { user } = useContext(AuthContext);
  console.log(user);
  const ProtectiveRoute = ({ children }) => {
    if (!user) {
      return <Navigate to={"/login"} />;
    } else if (user && !user.isAdmin) {
      return <Navigate to={"/login"} />;
    }
    return children;
  };

  return (
    <div className="App">
      {!onAdminPage && <Header></Header>}
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/rooms" element={<RoomsPage></RoomsPage>} />
        <Route path="/restaurant" element={<RestaurantPage></RestaurantPage>} />
        <Route path="/gallery" element={<GalleryPage></GalleryPage>} />
        <Route path="/about" element={<AboutPage></AboutPage>} />
        <Route path="/order" element={<OrderPage></OrderPage>} />
        <Route
          path="/admin"
          element={
            <ProtectiveRoute>
              <AdminPage />
            </ProtectiveRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {!onAdminPage && <Footer></Footer>}
    </div>
  );
}

export default App;
