import RoutesApp from "./routes/index";
import { AuthProvider } from "./contexts/auth";
import GlobalStyle from "./styles/global";
function App() {
  return (
    <AuthProvider>
      <RoutesApp />
      <GlobalStyle />
    </AuthProvider>

  );
}
export default App;
