import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ListaGastos = () => {

    const [gastos, guardarGastos] = useState([]);

    useEffect(() => {

        async function getGastos() {
            const gastos = await axios.get('http://localhost:4000/gastos/')
            console.log(gastos.data)
            guardarGastos(gastos.data)
        }

        getGastos();
    }, [])

    const deleteGasto = id => {
        console.log('el id clickeado es: ', id)
    }

    return (
        <>
            <div className="grid-row">
                <div className="grid md:grid-cols-3">
                    {gastos.map(gasto => (
                        <>
                            <div 
                                className="grid grid-cols-1 w-5/6 mx-auto my-4 py-2 bg-blue-400 text-center text-white shadow-2xl shadow-outline"
                                key={gasto.id}    
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
                                        <a
                                            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded"
                                            href="/gastos/[id]" as={`/gastos/${gasto.id}`}
                                        >Editar
                                        </a>
                                    </div>
                                    <div className="grid-cols-1">
                                        <button
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                            
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