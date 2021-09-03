
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bienvenida from './componentes/ItemListConteiner/Bienvenida'
/* import ItemListContainer from './componentes/ItemListConteiner/ItemListContainer'; */
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';







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
               {/*    <ItemListContainer/> */}
                  <ItemDetailContainer/>
             </div>
            </div> 
        </div>
      </div>

    </>
  );
}

export default App;
