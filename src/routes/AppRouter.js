import { useContext } from "react";
import { BrowserRouter} from "react-router-dom"
import { LoginContext } from "../context/LoginContext";
import { Footer } from "../components/Footer/Footer.js";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";


const AppRouter = () => {
    const {user} = useContext(LoginContext)

    return (
        <BrowserRouter>
         {
            user.logged 
            ? <PrivateRoutes/>
            : <PublicRoutes/>
        }
          <Footer />
        </BrowserRouter>
    )
}


export default AppRouter;