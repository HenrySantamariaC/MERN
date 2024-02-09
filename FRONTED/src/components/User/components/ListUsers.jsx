import { useEffect, useState } from 'react'
import axios from "axios";

export default function ListUsers(props) {
    const {users, getUsers} = props;

    function getCreatedAt(value) {
        const today = new Date(value);
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${date}/${month}/${year}`;
      }
      async function handleDeleteUser(userId) {
        await axios.delete(`http://localhost:4000/api/users/${userId}`)
        await getUsers()
      }
    return (
        <div className="max-w-2xl mx-auto border rounded-lg">
            <ul className="divide-y">
                {
                    users?.map((item, idx) => (
                        <li 
                        key={idx} 
                        className="p-5 flex items-start justify-between duration-150 hover:bg-gray-100"
                        onDoubleClick={() => handleDeleteUser(item._id)}
                        >
                            <div className="flex gap-3">
                                <img src={`https://ui-avatars.com/api/?name=${item.username}&background=random&color=fff`} className="flex-none w-12 h-12 rounded-full" />
                                <div>
                                    <span className="block text-sm text-gray-700 font-semibold">{item.username}</span>
                                    <span className="block text-sm text-gray-600">Registrado el {getCreatedAt(item.createdAt)}</span>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
