import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import iconImage from "../img/teste.png";
import api from "../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event) {
    event.preventDefault();
    const data = {
      email: email,
      password: password
    };

    api.post('/login', data)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
        alert('Erro ao realizar login');
      });
  }


  return (
    <Grid container justifyContent="center" alignItems="center" height="100vh">
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          borderRadius: 8,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          maxWidth: 400,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#333974", marginBottom: 2 }}
        >
          <img
            src={iconImage}
            alt="Login"
            style={{ marginBottom: "0.2em", width: "50%" }}
          />
        </Typography>
        <form>
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              style: {
                fontSize: "14px",
                marginTop: "8px", // Espaçamento acima do input
              },
            }}
            InputLabelProps={{
              style: {
                fontSize: "14px",
                marginTop: "8px", // Espaçamento acima do label
              },
            }}
          />
          <TextField
            type="password"
            label="Senha"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              style: {
                fontSize: "14px",
                marginTop: "8px", // Espaçamento acima do input
              },
            }}
            InputLabelProps={{
              style: {
                fontSize: "14px",
                marginTop: "8px", // Espaçamento acima do label
              },
            }}
          />
          <Button
            variant="contained"
            style={{ backgroundColor: "#4CAF50", color: "#fff", marginTop: 2 }}
            fullWidth
            type="submit"
            onClick={handleLogin}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Login;
