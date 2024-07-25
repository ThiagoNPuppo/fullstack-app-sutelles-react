import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:1337/api/pedidos',
});

const pedidoService = {
  listaPedidos: () => api.get('/?populate=*').then(res => res.data),
  getPedido: (id) => api.get(`/${id}`).then(res => res.data),
  inserirPedido: (pedido) => api.post('/', { data: pedido }).then(res => res.data),
  updatePedido: (id, pedido) => api.put(`/${id}`, { data: pedido }).then(res => res.data),
  deletePedido: (id) => api.delete(`/${id}`).then(res => res.data),
};

export default pedidoService;
