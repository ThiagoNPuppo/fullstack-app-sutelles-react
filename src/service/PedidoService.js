import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:1337/pedidos',
});

const pedidoService = {
  listaPedidos: () => api.get('/pedidos').then(res => res.data),
  getPedido: (id) => api.get(`/pedidos/${id}`).then(res => res.data),
  inserirPedido: (pedido) => api.post('/pedidos', { data: pedido }).then(res => res.data),
  updatePedido: (id, pedido) => api.put(`/pedidos/${id}`, { data: pedido }).then(res => res.data),
  deletePedido: (id) => api.delete(`/pedidos/${id}`).then(res => res.data),
};

export default pedidoService;
