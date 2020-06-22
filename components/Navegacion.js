import React, { useState, useEffect } from 'react'

const Navegacion = () => {

    const [username, guardarUsername] = useState(null)

    useEffect(() => {

        guardarUsername(localStorage.getItem('username'))    
    
    }, [])

    return ( 
        <>
            <div className="flex bg-blue-600 h-12 md:h-20 text-white items-center">
                <div className="justify-start items-center ml-3">
                        <a className="text-3xl md:text-5xl" href="/">GD</a>
                </div>
                {(username === null)
                    ? <ul className="flex ml-auto text-xs md:text-xl">
                        <li className="ml-4">
                            <a href="/nuevousuario">NUEVO USUARIO</a>
                        </li>
                        <li className="ml-4">
                            <a href="/auth/login">INICIAR SESION</a>
                        </li>
                      </ul>
                    :  <>
                        <p className="ml-2">Hola {username}</p>
                        <ul className="flex ml-auto text-xs md:text-xl">
                            <li className="ml-4">
                                <a href="/nuevogasto">NUEVO GASTO</a>
                            </li>
                            <li className="ml-4 mr-3">
                                <a href="/usuarios">LISTA USUARIOS</a>
                            </li>
                        </ul>
                        </>
                }
                
            </div>
        </>
     );
}
 
export default Navegacion;