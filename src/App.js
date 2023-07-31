import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Loginpage from "./components/Loginpage/Loginpage";
import ShopDetail from "./components/Pages/ShopDetail";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookShop from "./components/Pages/BookShop";
import User from "./components/Pages/User";
import Help from "./components/Pages/Help";
import BarberRegister from "./components/Pages/BarberRegister";
import Schedule from "./components/Pages/Schedule";
import SearchShop from "./components/Search/SearchShop";
import DashBoard from "./components/admin/DashBoard";
import ProfessionalProfile from "./components/admin/nestedRoutes/Profile";
import AddShopDetails from "./components/admin/nestedRoutes/AddShopDetails";
import ProfessionalSchedule from "./components/admin/nestedRoutes/ProfessionalSchedule";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //user Route
  const [isProfessional, setProfessional] = useState(false); //Professional Route

  //user Private Route
  function PrivateRoute({ isLoggedIn, children }) {
    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    } else {
      return children;
    }
  }

  //Professional Private Route
  function ProfessionalRoute({ children, isProfessional }) {
    if (!isProfessional) {
      return <Navigate to="/login" />;
    } else {
      return children;
    }
  }

  return (
    <>
      <Header
        setIsLoggedIn={setIsLoggedIn}
        isLoggedIn={isLoggedIn}
        isProfessional={isProfessional}
        setProfessional={setProfessional}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/:id" element={<ShopDetail />} />
        <Route path="/shop/:parent/:id/booking" element={<BookShop />} />

        <Route
          path="/user"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <User setIsLoggedIn={setIsLoggedIn} />
            </PrivateRoute>
          }
        />
        <Route path="/professional-register" element={<BarberRegister />} />
        <Route path="/help" element={<Help />} />
        <Route
          path="/Login"
          element={<Loginpage setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/search" element={<SearchShop />} />
        <Route path="/schedule" element={<Schedule />} />

        {/* Professional Route */}

        <Route
          path="/dashboard"
          element={
            <ProfessionalRoute isProfessional={isProfessional}>
              <DashBoard setProfessional={setProfessional} />
            </ProfessionalRoute>
          }
        >
          <Route index element={<ProfessionalProfile />} />
          <Route path="add-services" element={<AddShopDetails />} />
          <Route
            path="schedules-professional"
            element={<ProfessionalSchedule />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
