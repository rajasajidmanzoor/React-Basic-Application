import React from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export const Homescreen = () => {
  return (
    <>
        <div className="px-4 py-8 md:px-6 lg:px-8">
            <Card title="" className="flex justify-content-center"> 
                <h2 className='text-center'>  MERN Stack Application User Authentication & Profile </h2>
                <p className="text-center ">
                This a basic start MERN stack application with user authentication and user profile. This application demonstrate use of Express, moongse, MongoDB, JWT, Cookie-Parser, dotenv, bcrypt and PrimeReact UI in a Single Page Application.
                </p>
                <div className="card flex justify-content-center">
                    <Button label="Login" severity="secondary" className='m-1' icon="pi pi-fw pi-sign-in" />
                    <Button label="Register" className='m-1' icon="pi pi-fw pi-user-plus" />
                </div>
            </Card>            
        </div>
    </>
  )
}

export default Homescreen;