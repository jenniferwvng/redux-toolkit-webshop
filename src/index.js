import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter,
  Routes,
  Route 
} from 'react-router-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';

import CheckoutPage from './routes/CheckoutPage';
import ErrorPage from './routes/ErrorPage';
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
