import React from 'react'

const Navegacion = () => {
    return ( 
        <>
            <div className="flex bg-blue-600 h-12 md:h-20 text-white items-center">
                <div className="justify-start items-center ml-3">
                        <a className="text-3xl md:text-5xl" href="/">GD</a>
                </div>
                <ul className="flex ml-auto text-xs md:text-xl">
                    <li className="ml-3">
                        <a href="/nuevousuario">NUEVO USUARIO</a>
                    </li>
                    <li className="ml-3">
                        <a href="/nuevogasto">NUEVO GASTO</a>
                    </li>
                    <li className="ml-3 mr-3">
                        <a href="/usuarios">LISTA USUARIOS</a>
                    </li>
                </ul>
            </div>
        </>
     );
}
 
export default Navegacion;