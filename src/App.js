import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductsPage from "./pages/Products";
import DeatailProduct from "./pages/DeatailProduct";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProductsPage} />
        <Route path="/products/:productId" component={DeatailProduct} />
      </Switch>
    </Router>
  );
}

export default App;
