import React from 'react'
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

function Header() {
    const items = [
        {
            label: 'Sign In',
            icon: 'pi pi-fw pi-sign-in',
            command: () => { window.location.href = "/login"; }
        },
        {
            separator: true
        },
        {
            label: 'Sign up',
            icon: 'pi pi-fw pi-user-plus',
            command: () => { window.location.href = "/register"; }
        }
    ];
    const logo = <>
            <img alt="logo" src="https://10pearls.com/wp-content/uploads/2020/06/10P-Logo.svg" height="40" className="logo-tenp mr-2"></img>
            <img alt="logo" src="src/assets/app-logo.svg" height="30" className="mr-2"></img>
        </>
    const end = <img alt="logo" src="https://10pearls.com/wp-content/uploads/2020/06/10P-Logo.svg" height="40" className="logo-tenp"></img>;
  return (
    <>
        <div className="card">
            <Menubar className="flex justify-content-between" model={items} start={logo}  />
        </div>    
    </>
  )
}

export default Header