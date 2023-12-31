import "./dashboard.styles.css"

import { useState, useEffect } from "react";
import { 
    Outlet,
    useLocation,
    useNavigate
} from "react-router-dom";

import DashboardNavigation from "../../components/dashboard-navigation/dashboard-navigation.component"

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      localStorage.clear();
      navigate("/login");
    } else {
      setIsUserLoggedIn(true);
      setIsLoading(false);
    }

    return;
  }, []);
  
  
  const { pathname } = useLocation();  
  let page = pathname.slice(11);
  if (pathname === "/dashboard" || pathname === "/dashboard/") window.location.href = "/dashboard/products";

  return (
    <>
      {
        (!isUserLoggedIn && isLoading) ? (
          <div style={{
            height: "100vh", 
            width: "100vw", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center"
          }}>Loading...</div>
        ) : (
          <div className="dashboard-container">
            <DashboardNavigation page={page}/>
            <div className="responsive-container">
              <div className="responsive">
                <Outlet />
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Dashboard