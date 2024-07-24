import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:1337/api/produtos',
  });
  
  const produtoService = {
    listaProdutos: () => api.get('/').then(res => res.data),
    getProduto: (id) => api.get(`/${id}`).then(res => res.data),
    inserirProduto: (produto) => api.post('/', { data: produto }).then(res => res.data),
    updateProduto: (id, produto) => api.put(`/${id}`, { data: produto }).then(res => res.data),
    deleteProduto: (id) => api.delete(`/${id}`).then(res => res.data),
  };
  
  export default produtoService;
  