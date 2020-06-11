import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout';
import axios from 'axios';

const nuevogasto = () => {

    const [usuarios, guardarUsuarios] = useState([]);

    useEffect(() => {
        async function getUsuarios() {
            const users = await axios.get('http://localhost:4000/users/')
            console.log(users.data)
            guardarUsuarios(users.data)
        }
    
        getUsuarios();
    }, [])

    const [crearGasto, guardarCrearGasto] = useState([
        { username: '', description: '', importe: '', fecha: ''}
    ])

    const onChange = e => {
        console.log([e.target.name], e.target.value)
        guardarCrearGasto({...crearGasto, [e.target.name]: e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log('Boton onSubmit Presionado!: ')
        console.log(crearGasto)
        axios.post('http://localhost:4000/gastos/add', crearGasto)
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
                        Fecha
                    </label>
                    </div>
                    <div className="w-2/3">
                    <input 
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        id="inline-full-name" 
                        type="date" 
                        placeholder="01/01/1900" 
                        name="fecha"
                        onChange={onChange}
                    />
                    </div>
                </div>
                <div className="flex items-center mb-6">
                    <div className="w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Descripcion
                    </label>
                    </div>
                    <div className="w-2/3">
                    <input 
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        id="inline-full-name" 
                        type="text" 
                        placeholder="Lavandina" 
                        name="description"
                        onChange={onChange}
                    />
                    </div>
                </div>
                <div className="flex items-center mb-6">
                    <div className="w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Categoria
                    </label>
                    </div>
                    <div className="w-2/3">
                        <div className="relative">
                            <select 
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                id="grid-state"
                                type="text"
                                name="username"
                                onChange={onChange}
                            >
                                {usuarios.map(usuario => (
                                    <option value={usuario.username}>{usuario.username}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center mb-6">
                    <div className="w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Importe
                    </label>
                    </div>
                    <div className="w-2/3">
                    <input 
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        id="inline-full-name" 
                        type="number" 
                        placeholder="$999" 
                        name="importe"
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
                        Crear Gasto
                    </button>
                    </div>
                </div>
            </form>
        </Layout>
     );
}
 
export default nuevogasto;