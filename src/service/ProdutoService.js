import axios from "axios";

const BASE_URL = "http://localhost:3000/produtos"
async function listaProdutos() {
    const response = await axios.get(BASE_URL);
    return response.data;
}

async function inserirProduto(produto) {
    const response = await axios.post(BASE_URL, produto)
    return response.data;
}

export default {
    listaProdutos,
    inserirProduto
}