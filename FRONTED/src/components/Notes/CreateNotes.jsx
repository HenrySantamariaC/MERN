import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import {getUsers} from '../../services/user.service.js'
import {createNote} from '../../services/note.service.js'

export default function CreateNotes() {
    const navigate = useNavigate()
    const [users, setUsers] = useState();
    const [note, setNote] = useState({
        title: '',
        content: '',
        date: new Date().toISOString().split('T')[0],
        author: ''
    });

    async function listUsers() {
        let data = await getUsers()   
        setUsers(data)
        setNote({
            ...note,
            author: data[0].username
        })
    }

    function onInputFormChange({target: {name, value}}) {
        setNote({
            ...note,
            [name]: value
        })
    }

    async function onSubmit(e) {
        e.preventDefault();
        await createNote(note)
        navigate('/list-notes')
    }

    useEffect(() => {
        listUsers()
    }, [])

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">

                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-12 shadow-lg">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl">Crear nota</h1>
                    </div>
                    <form onSubmit={onSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                        <div>
                            <label htmlFor="author" className="text-gray-600"> Autor </label>

                            <select
                                className="appearance-none w-full mt-2 text-gray-400 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg px-3 py-2"
                                name="author"
                                required={true}
                                onChange={onInputFormChange}
                                value={note.author}
                            >
                                {users?.map((item, index) => (
                                    <option key={index} value={item.username}>{item.username}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor='title' className="text-gray-600">Título</label>
                            <input
                                type="text"
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                placeholder="Título"
                                name='title'
                                required={true}
                                onChange={onInputFormChange}
                                value={note.title}
                            />
                        </div>
                        <div>
                            <label htmlFor="content" className="text-gray-600"> Descripción </label>

                            <textarea
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                rows="4"
                                placeholder="Ingrese una descripción..."
                                name="content"
                                required={true}
                                onChange={onInputFormChange}
                                value={note.content}
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor='title' className="text-gray-600">Fecha de finalización</label>
                            <input
                                type="date"
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                placeholder="Título"
                                name='date'
                                required={true}
                                onChange={onInputFormChange}
                                value={note.date}
                            />
                        </div>
                        <div className="flex items-center justify-end">
                            <button
                                type="submit"
                                className="inline-block rounded-lg bg-indigo-600 hover:bg-indigo-700 px-5 py-3 text-sm font-medium text-white"
                            >
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
