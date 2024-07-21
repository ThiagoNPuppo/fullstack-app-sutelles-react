import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:1337/clientes', 
});

const clienteService = {
  listaClientes: () => api.get('/clientes').then(res => res.data),
  getCliente: (id) => api.get(`/clientes/${id}`).then(res => res.data),
  inserirCliente: (cliente) => api.post('/clientes', { data: cliente }).then(res => res.data),
  updateCliente: (id, cliente) => api.put(`/clientes/${id}`, { data: cliente }).then(res => res.data),
  deleteCliente: (id) => api.delete(`/clientes/${id}`).then(res => res.data),
};

export default clienteService;
