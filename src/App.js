import './App.css';
import { Products } from './features/products/Products';
import { Cart } from './features/cart/Cart';

function App() {
  return (
    <div className="App">
      <h1>Webshop simulation</h1>
      <Products />
      <Cart />
    </div>
  );
}

export default App;
