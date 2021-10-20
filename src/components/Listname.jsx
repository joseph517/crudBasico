import React, { useState } from 'react'
import uniqid from 'uniqid'

const Listname = () => {

    let [name, setName] = useState('')
    const [listName, setListName] = useState('')
    const [number, setNumer] = useState()

    const addUser = (e) => {
        e.preventDefault()
        const newName = {
            id: uniqid(), titleName: name, telefono: number
        }
        setListName([...listName, newName])
        setName('')
        setNumer('')
        
    }

    const numberP = (e) => {
        setNumer(e.target.value)
    }

    const onSubmit = (e) => {
        addUser(e)
        
    }
    const onChange = (e) => {
        setName(e.target.value)
    }

    return (
        <div>
            <div className='row'>
                <div className='col'>
                    <h2>Listado de nombres</h2>
                    <ul class="list-group">
                        {
                            listName && (
                                listName.map(iten => (
                                    <div>
                                        <li key="{iten.id}" class="list-group-item">{iten.titleName}</li>
                                        <li class="list-group-item">{iten.telefono}</li>
                                    </div>
                                ))
                            )
                        }
                    </ul>
                </div>

                <div className='col'>
                    <h2>Formulario para añadir nombres</h2>
                    <form onSubmit={onSubmit} className='form-group'>
                        <input
                            onChange={onChange}
                            className='form-control mb-3'
                            placeholder='Introduce el nombre'
                            value={name} type="text" />
                        <input
                            onChange={numberP}
                            className='form-control mb-3'
                            placeholder='Introduce el telefono'
                            value = {number}
                            type="text" />
                        <input
                            className='btn btn.info btn-primary'
                            type="submit"
                            value='Resgistrar nombre' />
                    </form>
                </div>
            </div>

        </div>
    )
}
export default Listname