import { NativeRouter, Routes, Route } from "react-router-native";

// ROUTES
import Home from "../pages/Home/Home";
import About from "../pages/About/About";

const Router = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </NativeRouter>
  );
};

export default Router;
