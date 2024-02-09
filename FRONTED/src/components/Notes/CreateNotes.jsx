import { useEffect, useState } from 'react'
import axios from "axios";

import CreateUser from '../User/components/CreateUser'
import ListUsers from '../User/components/ListUsers'

export default function CreateNotes() {
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

                <div className="mx-auto max-w-screen-xl w-2/3 px-4 py-16 sm:px-6 lg:px-8 shadow-lg">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl">Crear nota</h1>
                    </div>
                    <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                        <div>
                            <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900"> Headliner </label>

                            <div className="relative mt-1.5">
                                <input
                                    type="text"
                                    list="HeadlineActArtist"
                                    id="HeadlineAct"
                                    className="w-full rounded-lg border-gray-300 pe-10 text-gray-700 sm:text-sm [&::-webkit-calendar-picker-indicator]:opacity-0"
                                    placeholder="Please select"
                                />

                                <span className="absolute inset-y-0 end-0 flex w-8 items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-gray-500"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                                        />
                                    </svg>
                                </span>
                            </div>

                            <datalist name="HeadlineAct" id="HeadlineActArtist">
                                <option value="JM">John Mayer</option>
                                <option value="SRV">Stevie Ray Vaughn</option>
                                <option value="JH">Jimi Hendrix</option>
                                <option value="BBK">B.B King</option>
                                <option value="AK">Albert King</option>
                                <option value="BG">Buddy Guy</option>
                                <option value="EC">Eric Clapton</option>
                            </datalist>
                        </div>
                        <div>
                            <label className="text-gray-600">Título</label>
                            <input
                                type="text"
                                placeholder="Título"
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label htmlFor="descripcion" className="text-gray-600"> Descripción </label>

                            <textarea
                                id="descripcion"
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                rows="4"
                                placeholder="Ingrese una descripción..."
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-500">
                                No account?
                                <a className="underline" href="#">Sign up</a>
                            </p>

                            <button
                                type="submit"
                                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
