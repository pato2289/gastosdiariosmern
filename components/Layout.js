import React from 'react';
import "../assets/style.css";
import Navegacion from './Navegacion';

const Layout = props => {
    return ( 
        <>

            <Navegacion />

            <main>
                {props.children}
            </main>

        </>
     );
}
 
export default Layout;