import React, { useEffect, useState } from 'react'
import { getNotes } from '../../services/note.service.js'
import ItemNote from './components/ItemNote.jsx'
import { Link } from 'react-router-dom'

export default function ListNotes() {
  const [notes, setNotes] = useState()

  async function listNotes() {
    let list = await getNotes()
    setNotes(list)
  }

  useEffect(() => {
    listNotes()
  }, [])

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="items-start justify-between pt-8 md:flex">
          <div>
            <h3 className="text-gray-800 text-2xl font-bold">
              Gestión de Notas
            </h3>
          </div>
          <div className="items-center gap-x-3 mt-6 md:mt-0 sm:flex">
            <Link to="/create-note">
              <button
                className="flex items-center gap-2 px-4 py-2 mt-3 text-center text-gray-700 duration-150 
                font-medium rounded-lg border hover:bg-gray-50 active:bg-gray-100 sm:mt-0 md:text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Nueva nota
              </button>
            </Link>
          </div>
        </div>
      </div>
      <section className="py-8">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
          <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            {notes?.map((item, index) => (
              <ItemNote key={index} data={item} listNotes={listNotes} />
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
