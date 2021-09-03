
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bienvenida from './componentes/ItemListConteiner/Bienvenida'
import ItemListContainer from './componentes/ItemListConteiner/ItemListContainer';







function App() {
  
   
  return (
    <> 
      <div className="App">
        <div>
          <NavBar/>  
          <div>
            <Bienvenida/>
          </div>
            <div className= 'container'>
              <div className= 'row'>
                  <ItemListContainer/>
             </div>
            </div> 
        </div>
      </div>

    </>
  );
}

export default App;
