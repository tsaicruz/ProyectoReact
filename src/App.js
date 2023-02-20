import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Acordeon from "./components/Acordeon/Acordeon";



function App() {
  
  return (
    
    <div>
      <Navbar/>
      <ItemListContainer greeting="Bienvenidos a Catnip"/>
      <div class= 'container'>
      <Acordeon/>
      </div>

    </div>
  );
}

export default App;




