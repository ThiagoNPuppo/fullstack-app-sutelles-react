import FormProdutos from './FormProdutos';
import FormClientes from './FormClientes';

const Cadastro = () => {
  return (
    <div>
      <h1>Cadastro</h1>
      <div>
        <h2>Cadastrar Produto</h2>
        <FormProdutos />
      </div>
      <div>
        <h2>Cadastrar Cliente</h2>
        <FormClientes />
      </div>
    </div>
  );
};

export default Cadastro;
