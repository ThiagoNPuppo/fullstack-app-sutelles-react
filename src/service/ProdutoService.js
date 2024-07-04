import axios from "axios";

const BASE_URL = "http://localhost:3000/produtos"
async function listaProdutos() {
    const response = await axios.get(BASE_URL);
    return response.data;
}

export default {
    listaProdutos
}