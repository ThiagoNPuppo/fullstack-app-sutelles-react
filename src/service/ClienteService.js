import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:1337/api/clientes', 
});

const clienteService = {
  listaClientes: () => api.get('/').then(res => res.data),
  getCliente: (id) => api.get(`/${id}`).then(res => res.data),
  inserirCliente: (cliente) => api.post('/', { data: cliente }).then(res => res.data),
  updateCliente: (id, cliente) => api.put(`/${id}`, { data: cliente }).then(res => res.data),
  deleteCliente: (id) => api.delete(`/${id}`).then(res => res.data),
};

export default clienteService;
