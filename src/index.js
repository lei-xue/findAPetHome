import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ScrollToTop } from './components';
import { FilterProvider, CartProvider } from './context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
      <Router>
        <CartProvider>
          <FilterProvider>
            <ScrollToTop />
            <ToastContainer closeButton={false} autoClose={3000} position={"top-right"} />
            <App />
          </FilterProvider >
        </CartProvider>
      </Router></GoogleOAuthProvider>
  </React.StrictMode>
);

