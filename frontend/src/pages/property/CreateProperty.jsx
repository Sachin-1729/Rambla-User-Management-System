import React, { useState, useEffect, useContext } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Copyright from "../../components/Copyright";
import { useNavigate } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import Count from "../../context/Count";

const CustomBox = styled(Box)({
  padding: 10,
});

const CustomBox_For_Form = styled(Box)({
  paddingTop: 50,
  paddingBottom: 50,
  paddingLeft: 100,
  paddingRight: 100,
});

const getToken = () => {
  return localStorage.getItem("authToken");
};

function CreateProperties() {
  const [propertyName, setPropertyName] = useState("");
  const [propertyAddress, setPropertyAddress] = useState("");
  const [selectedTenant, setSelectedTenant] = useState("");
  const [selectedLandlord, setSelectedLandlord] = useState("");
  const [title, setTitle] = useContext(Count);
  const navigate = useNavigate();
  const [allTenants, setAllTenants] = useState([]);
  const [allLandlords, setAllLandlords] = useState([]);

  useEffect(() => {
    setTitle("Create Property");

    const pageData = async () => {
      const token = getToken();

      try {
        const apiUrl1 =
          "http://localhost:7000/users?role_id=66ab2e2ee525f1294827dbce";
        const apiUrl2 =
          "http://localhost:7000/users?role_id=66ab2e0be525f1294827dbcd";

        const [response1, response2] = await Promise.all([
          fetch(apiUrl1, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }),
          fetch(apiUrl2, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }),
        ]);

        if (!response1.ok || !response2.ok) {
          throw new Error("One or both of the network responses were not ok");
        }

        const data1 = await response1.json();
        const data2 = await response2.json();

        setAllTenants(data1.users);
        setAllLandlords(data2.users);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    pageData();
  }, [setTitle]);

  const handleChangeTenant = (event) => {
    setSelectedTenant(event.target.value);
  };

  const handleChangeLandlord = (event) => {
    setSelectedLandlord(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!selectedLandlord || !selectedTenant) {
      toast.error("Please select both landlord and tenant.");
      return;
    }
  
    console.log("Property Name-", propertyName);
    console.log("Property Address-", propertyAddress);
    console.log("Landlord_Id-", selectedLandlord);
    console.log("Tenant_Id-", selectedTenant);
  
    const property = {
      property_name: propertyName,    // Match schema field names
      property_address: propertyAddress, // Match schema field names
      property_image: "defaultImage.jpg", // Placeholder, update accordingly
      landlord_id: selectedLandlord,  // Match schema field names
      tenant_id: selectedTenant,      // Match schema field names
    };
  
    try {
      const token = getToken();
      const response = await fetch("http://localhost:7000/properties/store", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(property),
      });
  
      if (response.ok) {
        toast.success("Property created successfully!");
        setPropertyName("");
        setPropertyAddress("");
        setSelectedLandlord("");
        setSelectedTenant("");
        setTimeout(() => {
          navigate("/fetchproperty");
        }, 2000);
      } else {
        const errorData = await response.json();
        toast.error(`Error: ${errorData.message}`);
        throw new Error(errorData.message);
      }
    } catch (error) {
      console.error("Error creating property:", error);
    }
  };
  

  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <CustomBox>
          <Paper>
            <ToastContainer />
            <CustomBox_For_Form>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Property Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={propertyName}
                  onChange={(e) => setPropertyName(e.target.value)}
                />

                <TextField
                  label="Property Address"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={propertyAddress}
                  onChange={(e) => setPropertyAddress(e.target.value)}
                />

                <FormControl fullWidth margin="normal">
                  <InputLabel id="landlord-dropdown-label">Landlord</InputLabel>
                  <Select
                    labelId="landlord-dropdown-label"
                    id="landlord-dropdown"
                    value={selectedLandlord}
                    label="Select Landlord"
                    onChange={handleChangeLandlord}
                  >
                    {allLandlords.map((landlord) => (
                      <MenuItem key={landlord._id} value={landlord._id}>
                        {landlord.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth margin="normal">
                  <InputLabel id="tenant-dropdown-label">Tenant</InputLabel>
                  <Select
                    labelId="tenant-dropdown-label"
                    id="tenant-dropdown"
                    value={selectedTenant}
                    label="Select Tenant"
                    onChange={handleChangeTenant}
                  >
                    {allTenants.map((tenant) => (
                      <MenuItem key={tenant._id} value={tenant._id}>
                        {tenant.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <br />
                <br />

                <Button variant="contained" color="primary" type="submit">
                  Create Property
                </Button>
              </form>
            </CustomBox_For_Form>
          </Paper>
        </CustomBox>

        <Copyright />
      </Container>
    </div>
  );
}

export default CreateProperties;
