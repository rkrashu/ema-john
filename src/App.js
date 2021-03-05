import './App.css';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Notfound from './components/NotFound/Notfound';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
            <Container></Container>
          </Route>
          <Route path="/review"> 
            <OrderReview></OrderReview>
          </Route>
          <Route path="/manage">
            <Inventory></Inventory>
          </Route>
          <Route exact path="/">
            <Container></Container>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
