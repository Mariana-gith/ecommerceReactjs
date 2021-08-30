
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bienvenida from './componentes/ItemListConteiner/Bienvenida'
import Contador from './componentes/ItemCount/Contador';




function App() {

  const onAdd = (count)=> {
    alert( `Compraste ${count} productos`)     
  }

  return (
    <> 
      <div className="App">
          <NavBar/>  
          <div>
            <Bienvenida/>
          </div> 
          <Contador initial={1} stock={10} onAdd={onAdd} /> 
      </div>
    </>
  );
}

export default App;
