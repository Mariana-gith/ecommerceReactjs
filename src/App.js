
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bienvenida from './componentes/ItemListConteiner/Bienvenida'




function App() {
  return (
    <div className="App">
      <NavBar/>  
        <div>
          <Bienvenida/>
        </div>  
    </div>  
  );
}

export default App;
