import React from 'react'
import { useAuth } from './../../context/Authcontext';


import {Outlet , useNavigate} from "react-router-dom"


function Authlayout() {
const { user } = useAuth();
const Navigate = useNavigate();
if(user)
{
    return <Outlet/>
}
else
{ 
    Navigate("/login")

}

}

export default Authlayout