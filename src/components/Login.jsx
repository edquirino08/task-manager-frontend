import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import iconImage from "../img/teste.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    // Simulando uma verificação de login bem-sucedida
    if (email === "seuemail@example.com" && password === "suasenha") {
      alert("Login bem-sucedido!");

      // Limpar os campos de entrada
      setEmail("");
      setPassword("");
    } else {
      alert("Credenciais inválidas. Tente novamente.");
    }
  }

  return (
    <Grid container justifyContent="center" alignItems="center" height="100vh">
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          borderRadius: 8,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
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
            style={{ marginBottom: "0.2em" }}
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
          />
          <Button
            variant="contained"
            style={{ backgroundColor: "#4CAF50", color: "#fff" }}
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
