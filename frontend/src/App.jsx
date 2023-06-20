import React from 'react'; 
import { Button } from 'primereact/button';
import Header from './components/Header'
import Homescreen from './components/Homescreen';
import Login  from './components/Login';
import { Outlet } from 'react-router-dom';

const App = ()=>{
  return(
    <>
      <Header/>
      <div className="page-section my-3">
        <Outlet />
      </div>
    </>
  )
}

export default App;