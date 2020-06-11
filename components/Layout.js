import React from 'react';
import Head from 'next/head';
import "../assets/style.css";
import Navegacion from './Navegacion';

const Layout = props => {
    return ( 
        <>
            <Head>
                <title>GastosApp</title>
            </Head>

            <Navegacion />

            <main>
                {props.children}
            </main>

        </>
     );
}
 
export default Layout;