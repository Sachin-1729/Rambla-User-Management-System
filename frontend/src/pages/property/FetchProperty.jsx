import React, { useContext, useState, useEffect } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Copyright from "../../components/Copyright";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Count from "../../context/Count";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

function FetchProperty() {
  const [allProperty, setAllProperty] = useState([]);
  const [id, setId] = useState("");
  const [title, setTitle] = useContext(Count);

  const defaultTheme = createTheme();

  const getToken = () => {
    // Retrieve the token from localStorage or context
    return localStorage.getItem("authToken");
  };

  const fetchProperties = async () => {
    try {
      const token = getToken();
      const response = await fetch("http://localhost:7000/properties/", {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the header
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch properties");
      }

      const data = await response.json();
      console.log(data.properties)
      setAllProperty(data?.properties || []); // Use correct data property
    } catch (error) {
      console.error("Error fetching properties:", error);
      toast.error("Error fetching properties: " + error.message);
    }
  };

  useEffect(() => {
    setTitle("Property Management");
    fetchProperties(); // Call fetchProperties to get data
  }, [setTitle]);

  const handleDelete = async (property_id) => {
    try {
      const token = getToken();
      const response = await fetch(`http://localhost:7000/properties/store/${property_id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the header
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to delete property");
      }

      setAllProperty((prevProperties) =>
        prevProperties.filter((property) => property._id !== property_id)
      );
      toast.success("Property deleted successfully!");
    } catch (error) {
      console.error("Error deleting property:", error.message);
      toast.error("Error deleting property: " + error.message);
    }
  };

  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Link
          to="/createproperty"
          style={{ textDecoration: "none" }} // Inline style for Link
        >
          <Box
            display="flex"
            justifyContent="flex-end"
            sx={{ paddingBottom: "20px" }} // MUI sx prop for Box
          >
            <Button variant="contained" color="primary">
              Create Property
            </Button>
          </Box>
        </Link>
        <TableContainer component={Paper}>
          <ToastContainer />
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Property Name</TableCell>
                <TableCell align="center">Property Address</TableCell>
                <TableCell align="center">Tenant</TableCell>
                <TableCell align="center">Landlord</TableCell>
                <TableCell align="center">Delete</TableCell>
                <TableCell align="center">Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allProperty.length > 0 ? (
                allProperty.map(row => (
                  <TableRow
                    key={row._id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell  align="center" component="th" scope="row">
                      {row?.property_name}
                    </TableCell>
                    <TableCell align="center">{row?.property_address}</TableCell>
                    <TableCell align="center">{row?.tenant_id?.name}</TableCell>
                    <TableCell align="center">{row?.landlord_id?.name}</TableCell>
                   
                    <TableCell align="center">
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
                        to={`/properties/edit/${row._id}`} // Use the correct path with dynamic ID
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
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No data found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Copyright />
      </Container>
    </div>
  );
}

export default FetchProperty;
