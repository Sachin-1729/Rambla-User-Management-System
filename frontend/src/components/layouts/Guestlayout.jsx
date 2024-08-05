import React from "react";
import { useAuth } from './../../context/Authcontext';

import { Outlet,  useNavigate } from "react-router-dom";

function Guestlayout() {
const { user } = useAuth();
  const navigate = useNavigate();
  if (!user) {
    return <Outlet />;
  } else {
    navigate("/dashboard"); 
  }
}

export default Guestlayout;
