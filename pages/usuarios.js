import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout';
import useAuthAxios from '../hooks/useAuthAxios';


const Usuarios = () => {

    const [usuarios, guardarUsuarios] = useState([]);

    useEffect(() => {

        // Hook personalizado que verifica el token
        const authAxios = useAuthAxios();

        async function getUsuarios() {
            const users = await authAxios.get(`/users/`)
            console.log(users.data)
            guardarUsuarios(users.data)
        }
    
        getUsuarios();
    }, [])

    const deleteUsuario = id => {

        // Hook personalizado que verifica el token
        const authAxios = useAuthAxios();

        console.log('borrando el id: ', id)
        authAxios.delete('http://localhost:5000/users/' + id)
            .then(() => {
                console.log('Usuario borrado!')
            })
            .catch(err => ('No se pudo borrar: ', err))
    }


    return (
        <Layout> 
            <div className="text-center">
                <div className="grid md:grid-cols-3">
                    <div className="bg-gray-300 p-3 md:col-start-2 col-span-1 m-3">
                        <h1 className="text-2xl">USUARIOS</h1>
                        <ul>
                            {usuarios.map(usuario => (
                                <>
                                <div 
                                className="grid grid-cols-2 w-5/6 mx-auto my-4 py-2 bg-blue-400 text-center text-white shadow-2xl shadow-outline"
                                key={usuario._id}    
                                >
                                    <div className="grid-cols-1">{usuario.username}</div>
                                    <div className="grid-cols-1">
                                            <button
                                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                                onClick={e => deleteUsuario(usuario._id)}
                                            >Eliminar
                                            </button>
                                    </div>
                                </div>
                                </>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
     );
}
 
export default Usuarios;