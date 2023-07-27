import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Header from './Header';
import Checkout from './Checkout';
import Home from './Home';
function App() {
  return (
    <Router>
      <div className="app">
      <Switch>
        <Route path="/login" >
          <h1 color='white'>LOGIN PAGE</h1>
        </Route>
        <Route path="/checkout">
        <Header/>
          <Checkout></Checkout>
        </Route>
        <Route path="/">
        <Header/>
          <Home/>
        </Route>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
