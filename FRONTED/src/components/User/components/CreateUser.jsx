import { useEffect, useState } from 'react'

import axios from 'axios'

export default function CreateUser(props) {
    const {getUsers} = props;
    const [username, setUsername] = useState('')

    async function handleCreateUser(e) {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/users',{username: username})
        await getUsers()
        setUsername('')
    }

    return (
        <div className="border rounded-lg">
            <div className="flex items-start justify-between p-4">
                <div className="space-y-2">
                    <h4 className="text-gray-800 text-xl font-semibold">Registrar usuario</h4>
                    <div className="max-w-md px-4 mx-auto mt-12">
                        <label htmlFor="username" className="block py-2 text-gray-500">
                            Username
                        </label>
                        <div className="flex items-center text-gray-400 border rounded-md">
                            <div className="px-3 py-2.5 rounded-l-md bg-gray-50 border-r">
                                @
                            </div>
                            <input
                                type="text"
                                placeholder="DarkSide"
                                id="username"
                                className="w-full p-2.5 ml-2 bg-transparent outline-none"
                                value={username}
                                onChange={(e)=>setUsername(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5 px-4 border-t text-right">
                <button
                    className="px-4 py-2 text-white bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-700 active:shadow-lg"
                    onClick={handleCreateUser}
                >
                    Guardar
                </button>
            </div>
        </div>
    )
}