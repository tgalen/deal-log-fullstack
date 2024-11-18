import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { REGISTER_API } from "../constants/constants";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
// import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const Register = ({ setLockedInLoggedInUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  const { email, password, confirmPassword, firstName, lastName } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(REGISTER_API, formData);

    if (response.data) {
      localStorage.setItem("lockedInUser", JSON.stringify(response.data));
      setLockedInLoggedInUser(response.data);
      console.log(response.data);
      navigate("/");
    } else {
      console.log("Failed to Register");
    }
  };

  const paperStyle = {
    padding: "30px 20px",
    width: "400px",
    margin: "30px auto",
    textAlign: "center",
    maxWidth: "80%",
  };

  return (
    <Box>
      <Paper elevation={20} style={paperStyle}>
        <Box component="form" onSubmit={handleRegisterSubmit}>
          <h2>Register</h2>
          <Typography variant="caption">
            Please fill out this form to register an account.
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            label="Email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={onChange}
            label="First Name"
            autoComplete="firstName"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={onChange}
            label="Last Name"
            autoComplete="lastName"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            label="Password"
            autoComplete="password"
            type="password"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={onChange}
            autoComplete="confirmPassword"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          <Typography>
            Already a member? <Link href="/login">Login</Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Register;
