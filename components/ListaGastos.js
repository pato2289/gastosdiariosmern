import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'
import useAuthAxios from '../hooks/useAuthAxios';

const ListaGastos = () => {

    const [gastos, guardarGastos] = useState([]);

    useEffect(() => {

        // Hook personalizado que verifica el token
        const authAxios = useAuthAxios();

        async function getGastos() {
            const gastos = await authAxios.get(`http://localhost:5000/gastos/`)
            console.log(gastos.data)
            guardarGastos(gastos.data)
        }

        getGastos();
    
    }, [])

    const deleteGasto = id => {

        // Hook personalizado que verifica el token
        const authAxios = useAuthAxios();

        console.log('borrando el id: ', id)
        authAxios.delete('http://localhost:5000/gastos/' + id)
            .then(() => {
                console.log('Gasto borrado!')
            })
            .catch(err => ('No se pudo borrar: ', err))
    }

    return (
        <>
            <div className="grid-row">
                <div className="grid md:grid-cols-3">
                    {gastos.map(gasto => (
                        //(username===gasto.username) &&
                        <>
                            <div 
                                className="grid grid-cols-1 w-5/6 mx-auto my-4 py-2 bg-blue-400 text-center text-white shadow-2xl shadow-outline"
                                key={gasto._id}    
                            >
                                <div className="">
                                    <h1 className="text-3xl">{gasto.description}</h1>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="grid-cols-1">
                                        <p>Creador:</p>
                                    </div>
                                    <div className="grid-cols-1">
                                        <p>{gasto.username}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="grid-cols-1">
                                        <p>Fecha:</p>
                                    </div>
                                    <div className="grid-cols-1">
                                        <p>{gasto.fecha}</p>
                                    </div>
                                </div>
                                <div className="">
                                    <h1 className="text-3xl">${gasto.importe}</h1>
                                </div>
                                    <div className="grid grid-cols-2">
                                        <div className="grid-cols-1">
                                            <Link
                                                href="/gastos/[id]" as={`/gastos/${gasto._id}`}
                                            >
                                                <a
                                                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded"
                                                >Editar
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="grid-cols-1">
                                            <button
                                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                                onClick={e => deleteGasto(gasto._id)}
                                            >Eliminar
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>

        </>
    );
                }

export default ListaGastos;