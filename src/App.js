import { BrowserRouter, Switch , Route} from 'react-router-dom';


import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bienvenida from './componentes/ItemListConteiner/Bienvenida'
import ItemListContainer from './componentes/ItemListConteiner/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';



import {CartContextProvider} from './context/CartContext'
import Cart from './componentes/cart/Cart';



function App() {
  
    return (
      <CartContextProvider>
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
              <Route exact path ='/product/:id' >
                <ItemDetailContainer/>  
              </Route>
              <Route exact path ='/cart' >
                <Cart/>
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
     </CartContextProvider>
    );
}   

export default App;
