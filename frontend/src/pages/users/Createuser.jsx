
// import TableContainer from "@mui/material/TableContainer";
// import React, { useContext, useState, useEffect } from "react";
// import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Container from "@mui/material/Container";
// import Paper from "@mui/material/Paper";
// import Navbar from "../../components/Navbar";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Copyright from "../../components/Copyright";
// import { useNavigate } from "react-router-dom";
// import Count from "../../context/Count";
// import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

// const defaultTheme = createTheme();

// function CreateUsers() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");
//   const navigate = useNavigate();
//   const [title, setTitle] = useContext(Count);
//   const [selectedValue, setSelectedValue] = useState('');

//   async function handlesubmit(e) {
//     e.preventDefault();
//     const user = {
//       name,
//       email,
//       password,
//       role_id: role,
//     };

//     try {
//       const response = await fetch("http://localhost:7000/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(user),
//       });
//       if (response.ok) {
//         const data = await response.json();
//         console.log("User created:", data);
//         navigate("/users"); // Redirect to the desired path
//       } else {
//         console.error("Failed to create user:", await response.text());
//       }

//       console.log("User created:", response);
//       // Handle success, e.g., reset form or show a success message
//     } catch (error) {
//       console.error("Error creating user:", error);
//       // Handle error, e.g., show an error message
//     }
//   }

//   const CustomBox = styled(Box)({
//     padding: 10,
//   });
//   const CustomBox_For_Form = styled(Box)({
//     paddingTop: 50,
//     paddingBottom: 50,
//     paddingLeft: 100,
//     paddingRight: 100,
//   });
//   useEffect(() => {
//     setTitle("Create User");
//   }, []);
//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//     setRole(event.target.value)
//   };

//   return (
//     <div>
//       <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//         <CustomBox>
//           <TableContainer component={Paper}>
//             <div>
//               <CustomBox_For_Form>
//                 <form onSubmit={handlesubmit}>
//                   <TextField
//                     label="Name"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                   />

//                   <TextField
//                     label="Email"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                   <TextField
//                     label="Password"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <TextField
//                     label="Role_id"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     value={role}
//                     onChange={(e) => setRole(e.target.value)}
//                   />
//                   <InputLabel id="dropdown-label">Select Role</InputLabel>
//                   <Select
//                     labelId="dropdown-label"
//                     id="dropdown"
//                     value={selectedValue}
//                     label="Select an option"
//                     variant="outlined"
                  
//                     margin="normal"
//                     onChange={handleChange}
                    
//                   >
//                     <MenuItem value={"66ab2dbbe525f1294827dbcc"}>Admin</MenuItem>
//                     <MenuItem value={"66ab2e0be525f1294827dbcd"}>Landlord</MenuItem>
//                     <MenuItem value={"66ab2e2ee525f1294827dbce"}>Tenants</MenuItem>
                    
//                   </Select>

//                   <br />
//                   <br />

//                   <Button variant="contained" color="primary" type="submit">
//                     Create User
//                   </Button>
//                 </form>
//               </CustomBox_For_Form>
//             </div>
//           </TableContainer>
//         </CustomBox>

//         <Copyright />
//       </Container>
//     </div>
//   );
// }

// export default CreateUsers;

// import TableContainer from "@mui/material/TableContainer";
// import React, { useContext, useState, useEffect } from "react";
// import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Container from "@mui/material/Container";
// import Paper from "@mui/material/Paper";
// import Navbar from "../../components/Navbar";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Copyright from "../../components/Copyright";
// import { useNavigate } from "react-router-dom";
// import Count from "../../context/Count";
// import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

// const defaultTheme = createTheme();

// function CreateUsers() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");
//   const navigate = useNavigate();
//   const [title, setTitle] = useContext(Count);
//   const [selectedValue, setSelectedValue] = useState('');

//   async function handlesubmit(e) {
//     e.preventDefault();
//     const user = {
//       name,
//       email,
//       password,
//       role_id: role,
//     };

//     try {
//       const response = await fetch("http://localhost:7000/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(user),
//       });
//       if (response.ok) {
//         const data = await response.json();
//         console.log("User created:", data);
//         navigate("/users"); // Redirect to the desired path
//       } else {
//         console.error("Failed to create user:", await response.text());
//       }

//       console.log("User created:", response);
//       // Handle success, e.g., reset form or show a success message
//     } catch (error) {
//       console.error("Error creating user:", error);
//       // Handle error, e.g., show an error message
//     }
//   }

//   const CustomBox = styled(Box)({
//     padding: 10,
//   });
//   const CustomBox_For_Form = styled(Box)({
//     paddingTop: 50,
//     paddingBottom: 50,
//     paddingLeft: 100,
//     paddingRight: 100,
//   });
//   useEffect(() => {
//     setTitle("Create User");
//   }, []);
//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//     setRole(event.target.value);
//   };

//   return (
//     <div>
//       <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//         <CustomBox>
//           <TableContainer component={Paper}>
//             <div>
//               <CustomBox_For_Form>
//                 <form onSubmit={handlesubmit}>
//                   <TextField
//                     label="Name"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                   />

//                   <TextField
//                     label="Email"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                   <TextField
//                     label="Password"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />

//                   <FormControl fullWidth margin="normal">
//                     <InputLabel id="dropdown-label">Select Role</InputLabel>
//                     <Select
//                       labelId="dropdown-label"
//                       id="dropdown"
//                       value={selectedValue}
//                       label="Select Role"
//                       onChange={handleChange}
//                     >
//                       <MenuItem value={"66ab2dbbe525f1294827dbcc"}>Admin</MenuItem>
//                       <MenuItem value={"66ab2e0be525f1294827dbcd"}>Landlord</MenuItem>
//                       <MenuItem value={"66ab2e2ee525f1294827dbce"}>Tenants</MenuItem>
//                     </Select>
//                   </FormControl>

//                   <br />
//                   <br />

//                   <Button variant="contained" color="primary" type="submit">
//                     Create User
//                   </Button>
//                 </form>
//               </CustomBox_For_Form>
//             </div>
//           </TableContainer>
//         </CustomBox>

//         <Copyright />
//       </Container>
//     </div>
//   );
// }

// export default CreateUsers;

import TableContainer from "@mui/material/TableContainer";
import React, { useContext, useState, useEffect } from "react";
import { styled, createTheme } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Copyright from "../../components/Copyright";
import { useNavigate } from "react-router-dom";
import Count from "../../context/Count";
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const CustomBox = styled(Box)({
  padding: 10,
});

const CustomBox_For_Form = styled(Box)({
  paddingTop: 50,
  paddingBottom: 50,
  paddingLeft: 100,
  paddingRight: 100,
});

function CreateUsers() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const [title, setTitle] = useContext(Count);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    setTitle("Create User");
  }, [setTitle]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setRole(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!role) {
      toast.error("Please select a role.");
      return;}
    const user = {
      name,
      email,
      password,
      role_id: role,
    };

    try {
      const response = await fetch("http://localhost:7000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        const data = await response.json();
        toast.success('User created successfully!'); // Show success toast
        console.log("User created:", data);
        setTimeout(()=>{ navigate("/users");},2000)
        // Redirect to the desired path
      setName('');
      setEmail('');
      setPassword('');
      setRole('');
      setSelectedValue('');
      } else if (!response.ok)  {
        const errorData = await response.json();
        if (errorData.message.includes('duplicate key error')) {
          toast.error('User already exists!'); // Show error toast for duplicates
        } else {
          toast.error(`Error: ${errorData.message}`); // Show other errors
        }
        throw new Error(errorData.message); 
        
      }
    } catch (error) {
     
      
      console.error("Error creating user:", error);
    }
  };

  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <CustomBox>
          <TableContainer component={Paper}>
            <div>
            <ToastContainer /> 
              <CustomBox_For_Form>
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <FormControl fullWidth margin="normal">
                    <InputLabel id="dropdown-label">Select Role</InputLabel>
                    <Select
                      labelId="dropdown-label"
                      id="dropdown"
                      value={selectedValue}
                      label="Select Role"
                      onChange={handleChange}
                    >
                      <MenuItem value="66ab2dbbe525f1294827dbcc">Admin</MenuItem>
                      <MenuItem value="66ab2e0be525f1294827dbcd">Landlord</MenuItem>
                      <MenuItem value="66ab2e2ee525f1294827dbce">Tenants</MenuItem>
                    </Select>
                  </FormControl>

                  <br />
                  <br />

                  <Button variant="contained" color="primary" type="submit">
                    Create User
                  </Button>
                </form>
              </CustomBox_For_Form>
            </div>
          </TableContainer>
        </CustomBox>

        <Copyright />
      </Container>
    </div>
  );
}

export default CreateUsers;
