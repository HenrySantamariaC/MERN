import axios from "axios";

const BASE_URL_API = "http://localhost:4000/api"

async function getUsers() {
    let { data } = await axios.get(`${BASE_URL_API}/users`)
    return data
}

export {
    getUsers,

}