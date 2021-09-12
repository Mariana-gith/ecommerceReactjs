import { BrowserRouter, Switch , Route} from 'react-router-dom';


import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bienvenida from './componentes/ItemListConteiner/Bienvenida'
import ItemListContainer from './componentes/ItemListConteiner/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
/* import Contador from './componentes/ItemCount/Contador';
import { onAdd } from './componentes/ItemCount/Contador';
 */





function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path ='/'>
            <div className ="container">
              <div className ="row">
                <Bienvenida/>
                <ItemListContainer/>
              </div>
            </div>
          </Route>
          <Route exact path ='/category/:categoria'>
            <div className ="container">
              <div className ="row">
                <Bienvenida/>
                <ItemListContainer/>
              </div>
            </div>
          </Route>
          <Route exact path ='/detalle' >
            <ItemDetailContainer/>  
          </Route>
        </Switch>
      </div>
    </BrowserRouter>      
  );
}

export default App;
