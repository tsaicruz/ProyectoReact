import { CartProvider } from "./context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./routes/AppRouter.js";
import { LoginProvider } from "./context/LoginContext";


function App() {

  return (
    <LoginProvider>
      <CartProvider>
        <AppRouter/>
      </CartProvider>
    </LoginProvider>
  );
}

export default App;
