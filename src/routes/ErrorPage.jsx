import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

// Estilizando o componente Box para centralizar o conteúdo
const CenteredBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  textAlign: "center",
});

const ErrorPage = () => {
  return (
    <CenteredBox>
      <Typography variant="h4" color="error">
        Erro 404!
      </Typography>
      <Typography variant="body1">
        Parece que você se perdeu. Volte para a página inicial.
      </Typography>
      {/* Adicione links ou outros elementos conforme necessário */}
    </CenteredBox>
  );
};

export default ErrorPage;
