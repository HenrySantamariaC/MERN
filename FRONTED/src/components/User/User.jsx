import { useEffect, useState } from 'react'
import axios from "axios";

import ListUsers from './components/ListUsers'
import CreateUser from './components/CreateUser';

export default function User() {
    const [users, setUsers] = useState();

    async function getUsers() {
        let { data } = await axios.get('http://localhost:4000/api/users')
        setUsers(data)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
                <div className="grid grid-cols-1 gap-4 w-full lg:grid-cols-3 lg:gap-8">
                    <div className="h-32 rounded-lg">
                        <CreateUser getUsers={getUsers} />
                    </div>
                    <div className="h-32 rounded-lg lg:col-span-2">
                        <ListUsers users={users} getUsers={getUsers} />
                    </div>
                </div>
            </div>
        </section>
    )
}
