import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
//import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { LOGIN_API } from "../constants/constants";

const Login = ({ setLockedInLoggedInUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(LOGIN_API, formData);

    if (response.data) {
      localStorage.setItem("lockedInUser", JSON.stringify(response.data));
      setLockedInLoggedInUser(response.data);
      console.log(response.data);
      navigate("/");
    } else {
      console.log("failed");
    }

    return response.data;
  };
  const paperStyle = {
    padding: "30px 20px",
    width: "400px",
    margin: "100px auto",
    textAlign: "center",
    maxWidth: "80%",
  };
  return (
    <Box>
      <Paper elevation={20} style={paperStyle}>
        <Box component="form" onSubmit={handleLoginSubmit}>
          <h2>Login</h2>
          <Typography variant="caption">
            Please fill out this form to login.
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
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            label="Password"
            autoComplete="password"
            type="password"
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Typography>
            Need to make an account? <Link href="/register">Register</Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
