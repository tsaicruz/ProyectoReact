import Nosotros from "../components/Nosotros/Nosotros";
import { Navbar } from "../components/Navbar/Navbar";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Contacto from "../components/Contacto/Contacto";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Cart from "../components/Cart/Cart";
import { Route, Routes , Navigate} from "react-router-dom";



const PrivateRoutes = () => {
    return (
        <>
         <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              {/* <Route path="/productos/:categoriaId" element={<ItemListContainer />} /> */}
              <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>        
        </>
    )
}

export default PrivateRoutes;