import React from 'react'
import { InputText} from 'primereact/inputtext'
import { Checkbox }from 'primereact/checkbox'
import { Button } from 'primereact/button';


function Register() {
  return (
    <>
        <div className="surface-card p-4 m-auto shadow-2 border-round w-full lg:w-6">
            <div className="text-center mb-5">
                <div className="text-900 text-3xl font-medium mb-3">Register Now</div>
            </div>

            <div>

                <label htmlFor="email" className="block text-900 font-medium mb-2">Name</label>
                <InputText id="email" type="text" placeholder="Email address" className="w-full mb-3" />

                <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                <InputText id="email" type="text" placeholder="Email address" className="w-full mb-3" />

                <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
                <InputText type="password" placeholder="Password" className="w-full mb-3" />


                <Button label="Register Now" icon="pi pi-user" className="w-full" />
            </div>
        </div>
    </>
  )
}

export default Register