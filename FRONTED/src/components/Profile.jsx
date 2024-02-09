import { useState, useRef } from "react"

// Profile Dropdown
export default function Profile (props) {

    const [state, setState] = useState(false)
    const profileRef = useRef()

    return (
        <div className={`flex items-center space-x-4 ${props.class}`}>
            <button ref={profileRef} className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
                onClick={() => setState(!state)}
            >
                <img
                    src="https://randomuser.me/api/portraits/men/47.jpg"
                    className="w-full h-full rounded-full"
                />
            </button>
            <div className="lg:hidden">
                <span className="block">Micheal John</span>
                <span className="block text-sm text-gray-500">john@gmail.com</span>
            </div>
        </div>
    )
}