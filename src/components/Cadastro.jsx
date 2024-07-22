//import FormProdutos from './FormProdutos';
//import FormClientes from './FormClientes';
import { Outlet } from 'react-router-dom';

const Cadastro = () => {
  return (
    <div>
      <h1>Cadastro</h1>
      <Outlet />
    </div>
  );
};

export default Cadastro;
