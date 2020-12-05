import React from 'react';
import './App.css';
import ProductData from '../src/Data/ProductData'
import NavBar from './components/NavBar';
import InviteComponent from './components/InviteComponent';
import ProductListing from './components/ProductListing';
import { Switch, Route} from 'react-router-dom'
import CartPage from './components/CartPage';

function App() {

  return (
    <div className="App">
      <NavBar/>
    
      <Switch>
        <Route path="/" exact>
        <InviteComponent/>
      <ProductListing data= {ProductData}/>
      </Route>

        <Route path="/cart" component={CartPage}></Route>
      </Switch>
    
      </div>
  
    

    
  
  );
}

export default App;
