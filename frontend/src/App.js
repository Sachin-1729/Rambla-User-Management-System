import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Navbar from "./components/Navbar";
import Count from "./context/Count";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/users/Users";
import Createuser from "./pages/users/Createuser";
import EditUsers from "./pages/users/Edituser";
import SignIn from "./pages/Login";
import Authlayout from "./components/layouts/Authlayout";
import Guestlayout from "./components/layouts/Guestlayout";
import { AuthProvider } from "./components/providers/AuthProvider";
import Notfound from "./pages/Notfound";
import CreateProperty from "./pages/property/CreateProperty";
import FetchProperty from "./pages/property/FetchProperty";

const defaultTheme = createTheme();

function App() {
  const [title, setTitle] = useState("");
  const[errorPath, setErrorPath] = useState("");

  return (
    
    <BrowserRouter>
    <AuthProvider>
      <ThemeProvider theme={defaultTheme}>
        <Count.Provider value={[title, setTitle]}>
          
            <Box sx={{ display: "flex" }}>
              <CssBaseline />
              <Navbar /> {/* Only one instance */}
              <Box
                component="main"
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[100]
                      : theme.palette.grey[900],
                  flexGrow: 1,
                  height: "100vh",
                  overflow: "auto",
                }}
              >
                <Toolbar />
                <Routes>
                  <Route element={<Guestlayout />}>
                    <Route path="/login" element={<SignIn />} />
                   
                  </Route>
                  <Route element={<Authlayout />}>
                    <Route exact path="/" element={<Dashboard />} />
                    <Route exact path="/users" element={<Users />} />
                    <Route exact path="/createuser" element={<Createuser />} />
                    <Route exact path="/users/edit/:id" element={<EditUsers />} />
                    <Route exact path="/fetchproperty" element={<FetchProperty />} />
                    <Route exact path ="/createproperty" element = {<CreateProperty/>}/>

                  </Route>
               
                </Routes>
              </Box>
            </Box>
        </Count.Provider>
      </ThemeProvider>
    </AuthProvider></BrowserRouter>
  );
}

export default App;
