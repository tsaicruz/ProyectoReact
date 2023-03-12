import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes , Route} from "react-router-dom";
import { Footer } from "./components/Footer/Footer.js";
import { Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  
  return (
    <BrowserRouter> 

      <Navbar/>


      <Routes> 
        
      <Route path="/" element={<ItemListContainer/>}/> 
      <Route path="/productos/:categoriaId" element={<ItemListContainer/>}/> 
      <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/> 
      <Route path="/productos/nosotros" element={<ItemListContainer/>}/> 
      <Route path="/productos/contacto" element={<ItemListContainer/>}/> 
      <Route path="*" element={<Navigate to="/"/>}/>
      
      </Routes>
      

      <Footer/>  

    </BrowserRouter>

  );
}

export default App;




