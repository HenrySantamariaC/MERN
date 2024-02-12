import axios from "axios";

const BASE_URL_API = "http://localhost:4000/api"

async function createNote(body) {
    let response = await axios.post(`${BASE_URL_API}/notes`,body)
    console.log(response);
}

async function getNotes() {
    let { data } = await axios.get(`${BASE_URL_API}/notes`)
    return data
}

async function getNoteById(id) {
    let { data } = await axios.get(`${BASE_URL_API}/notes/${id}`)
    return data
}

async function updateNote(body) {
    await axios.put(`${BASE_URL_API}/notes/${body._id}`,body)
}

async function deleteNote(id) {
    await axios.delete(`${BASE_URL_API}/notes/${id}`)
}

export {
    createNote,
    getNotes,
    getNoteById,
    updateNote,
    deleteNote,
}