import React, { useEffect,useContext } from 'react';
import { Outlet,Navigate } from 'react-router-dom';
import { isLogin } from '../../auth';
import AuthContext from '../providers/AuthProvider';

function Authlayout() {
  const { user } = useContext(AuthContext);
  return (
    <>
    {
        isLogin()
          ?
          <Outlet />
          :
          <Navigate to="/login" />
      }
      </>
  )
}

export default Authlayout;
