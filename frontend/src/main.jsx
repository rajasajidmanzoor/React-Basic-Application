import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
 } from "react-router-dom";
import "/node_modules/primeflex/primeflex.css"
import "primereact/resources/themes/viva-light/theme.css";
import "primereact/resources/primereact.min.css";  
import 'primeicons/primeicons.css';
import App from './App.jsx'
import './index.css'
import Homescreen from './components/Homescreen.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={ true } path="/" element={ <Homescreen /> } />
      <Route index={ false } path="/login" element={ <Login /> } />
      <Route index={ false } path="/register" element={ <Register /> } />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
