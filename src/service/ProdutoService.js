import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:1337api/produtos',
  });
  
  const pedidoService = {
    listaProdutos: () => api.get('/').then(res => res.data),
    getProduto: (id) => api.get(`/${id}`).then(res => res.data),
    inserirProduto: (pedido) => api.post('/', { data: pedido }).then(res => res.data),
    updateProduto: (id, pedido) => api.put(`/${id}`, { data: pedido }).then(res => res.data),
    deleteProduto: (id) => api.delete(`/${id}`).then(res => res.data),
  };
  
  export default pedidoService;
  