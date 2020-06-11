import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Layout from '../components/Layout';

const Usuarios = () => {

    const [usuarios, guardarUsuarios] = useState([]);

    useEffect(() => {
        async function getUsuarios() {
            const users = await axios.get('http://localhost:5000/users/')
            console.log(users.data)
            guardarUsuarios(users.data)
        }
    
        getUsuarios();
    }, [])


    return (
        <Layout> 
            <div className="text-center">
                <h1 className="md:text-4xl mb-3">Lista de Usuarios</h1>
                <div className="grid md:grid-cols-3">
                    <div className="bg-gray-300 p-3 md:col-start-2 col-span-1 m-3">
                        <h1 className="text-2xl">USUARIOS</h1>
                        <ul>
                            {usuarios.map(usuario => (
                                    <li>{usuario.username}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
     );
}
 
export default Usuarios;