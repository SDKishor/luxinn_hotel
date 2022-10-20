import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { ContactPage } from "./pages/ContactPage";
import { GalleryPage } from "./pages/GalleryPage";
import { Home } from "./pages/Home";
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
        <Route path="/Contact" element={<ContactPage></ContactPage>} />
      </Routes>
    </div>
  );
}

export default App;
