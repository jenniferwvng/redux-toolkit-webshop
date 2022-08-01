import './App.css';
import { Products } from './features/products/Products';
import { Cart } from './features/cart/Cart';

function App() {
  return (
    <div className="App">
      <p>Webshop</p>
      <Products />
      <Cart />
    </div>
  );
}

export default App;
