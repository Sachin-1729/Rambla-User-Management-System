import React, { useContext, useState, useEffect } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
// import Orders from "./../components/Orders";
import Navbar from "../../components/Navbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Copyright from "../../components/Copyright";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link, useResolvedPath } from "react-router-dom";
import Count from "../../context/Count";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

function Users() {
  const [alluser, setAlluser] = useState([]);
  const [id, setId] = useState("");
  const [title, setTitle] = useContext(Count);

  const defaultTheme = createTheme();

  async function user() {
    await fetch("http://localhost:7000/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAlluser(data.users);
      });
  }

  useEffect(() => {
    setTitle("User Management");
    user();
  }, []);

  async function handleDelete(user_id) {
    console.log(user_id);
    try {
      const response = await fetch(`http://localhost:7000/users/${user_id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      // Remove the deleted user from the state

      setAlluser((prevUsers) =>
        prevUsers.filter((user) => user._id !== user_id)
      );
      toast.success("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting user:", error.message);
    }
  }

  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Link
          style={{ textDecoration: "none" }}
          to="/createuser"
          sx={{ textDecoration: "none" }}
        >
          <Box display="flex" justifyContent="flex-end">
            <Button variant="contained" color="primary">
              Create User
            </Button>
          </Box>
        </Link>
        <TableContainer component={Paper}>
          <ToastContainer />
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Password</TableCell>
                <TableCell align="right">Role</TableCell>
                <TableCell align="right">Delete User</TableCell>
                <TableCell align="right">Edit User</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {alluser.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.password}</TableCell>

                  <TableCell align="right">{row?.role_id?.name}</TableCell>
                  <TableCell align="right">
                    <Button
                      onClick={() => handleDelete(row._id)}
                      variant="contained"
                      color="primary"
                      type="submit"
                    >
                      Delete
                    </Button>
                  </TableCell>

                  <TableCell align="right">
                    <Link
                      to={`/users/edit/${row._id}`} // Use the correct path with dynamic ID
                      style={{ textDecoration: "none" }}
                    >
                      <Box display="flex" justifyContent="flex-end">
                        <Button variant="contained" color="primary">
                          Edit
                        </Button>
                      </Box>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Copyright />
      </Container>
    </div>
  );
}

export default Users;
