import React, { useState } from 'react'
import axios from 'axios'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

const SignIn = () => {

    const router = useRouter()

    const [iniciarSesion, guardarIniciarSesion] = useState([{ 
        username: '', password: ''
    }])

    const onChange = e => {
        console.log([e.target.name], e.target.value)
        guardarIniciarSesion({...iniciarSesion, [e.target.name]: e.target.value})
    }


    const onSubmit = async e => {
        e.preventDefault();
        console.log('Apretando onSubmit!');
        axios.post('http://localhost:5000/auth/login', iniciarSesion)
            .then(res => {
                console.log('res.data es: ', res.data)
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('username', res.data.payload.username);
                localStorage.setItem('role', res.data.payload.role);
            })
            .catch(err => {
                console.log('Error: ', err)
            })
        router.push('/')
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
                        Usuario
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
                <div className="flex items-center">
                    <div className="w-1/3"></div>
                    <div className="w-2/3">
                    <button 
                        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
                        type="submit"
                    >
                        Iniciar Sesion
                    </button>
                    </div>
                </div>
            </form>
        </Layout>
     );
}
 
export default SignIn;