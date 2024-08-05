import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";

import PeopleIcon from "@mui/icons-material/People";

import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom";

import LoginIcon from '@mui/icons-material/Login';

export const mainListItems = (
  <React.Fragment>
    <Link style={{ textDecoration: "none" }} to="/">
    
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
       
        <ListItemText primary="Dashboard" />
      
      </ListItemButton>
      
      

    </Link>

    <Link style={{ textDecoration: "none" }} to="/users">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        
        <ListItemText primary="Users Management" />
      </ListItemButton>
    </Link>

   
    <Link style={{ textDecoration: "none" }} to="/login">
      <ListItemButton>
        <ListItemIcon>
          <LoginIcon />
        </ListItemIcon>
        
        <ListItemText primary="Login" />
      </ListItemButton>
    </Link>


  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
