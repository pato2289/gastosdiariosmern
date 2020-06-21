import React, { useState } from 'react'
import axios from 'axios'
import Layout from '../components/Layout';
import useAuthAxios from '../hooks/useAuthAxios';

const NuevoUsuario = () => {

    const [crearUsuario, guardarCrearUsuario] = useState([{ 
        username: '', email: '', password: '', role: ''
    }])

    const onChange = e => {
        console.log([e.target.name], e.target.value)
        guardarCrearUsuario({...crearUsuario, [e.target.name]: e.target.value})
    }

    const onSubmit = e => {
        const authAxios = useAuthAxios();
        e.preventDefault();
        console.log('Boton onSubmit Presionado!: ')
        authAxios.post('http://localhost:5000/users/add', crearUsuario)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log('Error: ', err)
            })
    }

    return (
        <Layout> 
            <form 
                className="w-full max-w-sm p-3 md:m-auto md:py-6"
                onSubmit={onSubmit}
            >
                <div className="flex items-center mb-6">
                    <div className="w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Nombre
                    </label>
                    </div>
                    <div className="w-2/3">
                    <input 
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        type="text" 
                        placeholder="nombre" 
                        name="username"
                        onChange={onChange}
                    />
                    </div>
                </div>
                <div className="flex items-center mb-6">
                    <div className="w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Contraseña
                    </label>
                    </div>
                    <div className="w-2/3">
                    <input 
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        type="password" 
                        placeholder="contraseña" 
                        name="password"
                        onChange={onChange}
                    />
                    </div>
                </div>
                <div className="flex items-center mb-6">
                    <div className="w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Email
                    </label>
                    </div>
                    <div className="w-2/3">
                    <input 
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        type="email" 
                        placeholder="email" 
                        name="email"
                        onChange={onChange}
                    />
                    </div>
                </div>
                <div className="flex items-center mb-6">
                    <div className="w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Rol
                    </label>
                    </div>
                    <div className="w-2/3">
                        <div className="relative">
                            <select 
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                type="text"
                                name="role"
                                onChange={onChange}
                            >
                                <option>admin</option>
                                <option>regular</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-1/3"></div>
                    <div className="w-2/3">
                    <button 
                        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
                        type="submit"
                    >
                        Crear Usuario
                    </button>
                    </div>
                </div>
            </form>
        </Layout>
     );
}
 
export default NuevoUsuario;