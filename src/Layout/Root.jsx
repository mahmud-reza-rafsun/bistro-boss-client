import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Root = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("registration");
  return (
    <div>
      {noHeaderFooter || <Navbar />}
      <div className="min-h-[calc(100vh-280px)]">
        <Outlet />
      </div>
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Root;
