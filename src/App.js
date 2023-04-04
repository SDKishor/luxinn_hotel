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
import { Admin_Dashboard } from "./admin/Admin_Dashboard";
import { Admin_Hotels } from "./admin/Admin_Hotels";
import { Admin_Restaurant } from "./admin/Admin_Restaurant";
import { Admin_Wellcome } from "./admin/Admin_Wellcome";
import { Admin_Userslist } from "./admin/Admin_Userslist";
import { Admin_Stats } from "./admin/Admin_Stats";
import { Admin_Notifications } from "./admin/Admin_Notifications";
import { Admin_SystemHealth } from "./admin/Admin_SystemHealth";
import { Admin_Logs } from "./admin/Admin_Logs";
import { Admin_Setting } from "./admin/Admin_Setting";
import { Admin_Profile } from "./admin/Admin_Profile";

function App() {
  const onAdminPage = useLocation().pathname.split("/")[1] === "admin";

  const { user } = useContext(AuthContext);

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
        >
          <Route index element={<Admin_Wellcome />} />
          <Route path="/admin/dashboard" element={<Admin_Dashboard />} />
          <Route path="/admin/userslist" element={<Admin_Userslist />} />
          <Route path="/admin/hotels" element={<Admin_Hotels />} />
          <Route path="/admin/restaurant" element={<Admin_Restaurant />} />
          <Route path="/admin/stats" element={<Admin_Stats />} />
          <Route
            path="/admin/notifications"
            element={<Admin_Notifications />}
          />
          <Route path="/admin/systemhealth" element={<Admin_SystemHealth />} />
          <Route path="/admin/logs" element={<Admin_Logs />} />
          <Route path="/admin/setting" element={<Admin_Setting />} />
          <Route path="/admin/profile" element={<Admin_Profile />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {!onAdminPage && <Footer></Footer>}
    </div>
  );
}

export default App;
