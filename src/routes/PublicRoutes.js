import LoginScreen from "../components/LoginScreen/LoginScreen";
import { Route, Routes , Navigate} from "react-router-dom";


const PublicRoutes = () => {

    return (
        <>
        
        <Routes>
              <Route path="/login" element={<LoginScreen/>}/>
              <Route path ="*" element={<Navigate to="/login" /> } />
            </Routes>        
        </>
    )
}
export default PublicRoutes;