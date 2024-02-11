import { format, register } from 'timeago.js';
import locale from "timeago.js/lib/lang/es";
import { deleteNote } from '../../../services/note.service';

register("es_ES", locale)

export default function ItemNote(props) {
    const { data, listNotes } = props

    async function handleDeleteNote() {
        await deleteNote(data._id)
        await listNotes()
    }

    return (
        <div
            className="relative block rounded-lg p-4 sm:p-6 lg:p-8 bg-white
            border border-gray-200 hover:border-none 
            hover:before:absolute
            hover:before:w-full
            hover:before:h-full
            hover:before:-z-10
            hover:before:bg-gradient-to-r
            hover:before:from-pink-600/50
            hover:before:to-indigo-600/50
            hover:before:left-0
            hover:before:top-1
            hover:before:blur-sm
            "
        >
            <span
                className="absolute inset-x-0 bottom-0 rounded-b-lg h-2 bg-gradient-to-r from-pink-600 to-indigo-700"
            ></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
                <div>
                    <h3 className="text-lg line-clamp-1 font-bold text-gray-900 sm:text-xl">
                        {data.title}
                    </h3>

                    <p className="mt-1 text-xs line-clamp-1 font-medium text-gray-600">Por {data.author}</p>
                </div>

                <div className="hidden sm:block sm:shrink-0">
                    <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
                        <button
                            className="inline-block border-e p-3 text-gray-700 hover:bg-gray-50 hover:text-indigo-700 focus:relative"
                            title="Editar Nota"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                />
                            </svg>
                        </button>

                        <button
                            className="inline-block p-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 focus:relative"
                            title="Eliminar Nota"
                            onClick={handleDeleteNote}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                            </svg>
                        </button>
                    </span>
                </div>
            </div>

            <div className="mt-4">
                <p className="text-pretty line-clamp-3 text-sm text-gray-500">
                    {data.content}
                </p>
            </div>

            <div className="flex flex-col-reverse mt-6">
                <span className="text-sm font-medium text-gray-600">Finaliza</span>
                <span className="text-xs text-gray-500">{format(data.date, "es_ES")}</span>
            </div>
        </div>
    )
}
