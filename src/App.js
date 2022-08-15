import './App.css';
import { Products } from './features/products/Products';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Products />
    </div>
  );
}

export default App;
