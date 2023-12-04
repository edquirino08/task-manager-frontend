import RoutesApp from "./routes/index";
import { AuthProvider } from "./contexts/auth";
function App() {
  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>

  );
}
export default App;
