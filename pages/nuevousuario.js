import React, { useState } from 'react'
import axios from 'axios'
import Layout from '../components/Layout';

const NuevoUsuario = () => {

    const [crearUsuario, guardarCrearUsuario] = useState([{ 
        username: ''
    }])

    const onChange = e => {
        console.log([e.target.name], e.target.value)
        guardarCrearUsuario({...crearUsuario, [e.target.name]: e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log('Boton onSubmit Presionado!: ')
        axios.post('http://localhost:4000/users/add', crearUsuario)
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
                        id="inline-full-name" 
                        type="text" 
                        placeholder="nombre" 
                        name="username"
                        onChange={onChange}
                    />
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