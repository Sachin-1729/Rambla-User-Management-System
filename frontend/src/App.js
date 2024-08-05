import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/users/Users";
import Createuser from "./pages/users/Createuser";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import Toolbar from "@mui/material/Toolbar";
import Count from "./context/Count";
import EditUsers from "./pages/users/Edituser";
import Login from "./pages/Login";
import Authlayout from "./components/layouts/Authlayout";
import Guestlayout from "./components/layouts/Guestlayout";

const defaultTheme = createTheme();
function App() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [title, setTitle] = useState("");

  return (
    <div>
      <Count.Provider value={[title, setTitle]}>
        <BrowserRouter>
          <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: "flex" }}>
              <CssBaseline />
              <Navbar title={"Dashboard"} />

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
                    <Route exact path="/" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                  </Route>

                  <Route element={<Authlayout />}>
                    <Route exact path="/users" element={<Users />} />
                    <Route exact path="/createuser" element={<Createuser />} />
                    <Route path="/users/edit/:id" element={<EditUsers />} />
                  </Route>
                </Routes>
              </Box>
            </Box>
          </ThemeProvider>
        </BrowserRouter>
      </Count.Provider>
    </div>
  );
}

export default App;
