import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import iconImage from "../img/teste.png";
import api from "../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post("/login", { email, password });
      const { data } = response;
      navigate("/dashboard", { state: { userData: data } });
    } catch (error) {
      console.error(error);
      setLoginError(true);
      setPassword("");
      setTimeout(() => setLoginError(false), 10000);
    }
  };

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
            InputProps={{ style: { fontSize: "14px", marginTop: "8px" } }}
            InputLabelProps={{ style: { fontSize: "14px", marginTop: "8px" } }}
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
            InputProps={{ style: { fontSize: "14px", marginTop: "8px" } }}
            InputLabelProps={{ style: { fontSize: "14px", marginTop: "8px" } }}
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
          {loginError && (
            <div
              style={{
                backgroundColor: "#FFEBEE",
                color: "#D32F2F",
                padding: "10px",
                borderRadius: "5px",
                textAlign: "center",
                marginBottom: "10px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              Erro ao realizar login. Verifique suas credenciais.
            </div>
          )}
        </form>
      </Paper>
    </Grid>
  );
};

export default Login;
