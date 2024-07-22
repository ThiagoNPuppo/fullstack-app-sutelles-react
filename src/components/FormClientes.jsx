import { useState } from 'react';
import clienteService from '../service/ClienteService';

export default function FormClientes() {
    
        const [nome, setNome] = useState("");
        const [cpf, setCpf] = useState("");
        const [email, setEmail] = useState("");
        const [telefone, setTelefone] = useState("");
        const [endereco, setEndereco] = useState("");
    
        const cadastrarCliente = (event) => {
            event.preventDefault();
            clienteService.inserirCliente({ nome: nome, cpf: cpf, email: email, telefone: telefone, endereco: endereco })
                .then(cliente => {
                    console.log("Cliente", cliente);
                    setNome("");
                    setCpf("");
                    setEmail("");
                    setTelefone("");
                    setEndereco("");
                    alert("Cliente cadastrado com sucesso!")
                })
                .catch(error => {
                    console.log("Erro ao cadastrar cliente", error);
                    //alert("Erro ao cadastrar cliente");
                });
        }
        return (
            <form onSubmit={cadastrarCliente}>
                <label>Nome:</label>
                <input type="text" name="nome" value={nome}
                    onChange={(ev) => setNome(ev.target.value)} />
                <br />
                <label>CPF:</label>
                <input type="text" name="cpf" value={cpf}
                    onChange={(ev) => setCpf(ev.target.value)} />
                <label>Email:</label>
                <input type="text" name="email" value={email}
                    onChange={(ev) => setEmail(ev.target.value)} />
                <br />
                <label>Telefone:</label>
                <input type="text" name="telefone" value={telefone}
                    onChange={(ev) => setTelefone(ev.target.value)} />
                <br />
                <label>Endereço:</label>
                <input type="text" name="endereco" value={endereco}
                    onChange={(ev) => setEndereco(ev.target.value)} />
                <br />
                <input type="submit" value="Salvar" />
            </form>
        )
    }