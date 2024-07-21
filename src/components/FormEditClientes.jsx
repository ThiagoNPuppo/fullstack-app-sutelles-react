import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import clienteService from "../service/ClienteService";

export default function FormEditClientes() {
    
        const { id } = useParams();
        const navigate = useNavigate();
        const [nome, setNome] = useState("");
        const [cpf, setCpf] = useState("");
        const [email, setEmail] = useState("");
        const [telefone, setTelefone] = useState("");
        const [endereco, setEndereco] = useState("");
    
        useEffect(() => {
            clienteService.buscarCliente(id)
                .then(cliente => {
                    setNome(cliente.data.nome);
                    setCpf(cliente.data.cpf);
                    setEmail(cliente.data.email);
                    setTelefone(cliente.data.telefone);
                    setEndereco(cliente.data.endereco);
                })
                .catch(err => {
                    console.error("Erro ao buscar cliente:", err);
                    alert("Erro ao buscar cliente.");
                });
        }, [id])
    
        const editarCliente = (event) => {
            event.preventDefault();
            clienteService.editarCliente(id, { nome, cpf, email, telefone })
                .then(() => {
                    alert("Cliente editado com sucesso!");
                    navigate(-1);
                })
                .catch(err => {
                    console.error("Erro ao editar cliente:", err);
                    alert("Erro ao editar cliente.");
                });
        }
    
        const voltar = () => {
            navigate(-1);
        }
        return (
            <form onSubmit={editarCliente}>
                <label>Nome:</label>
                <input type="text" name="nome" value={nome}
                    onChange={(ev) => setNome(ev.target.value)} />
                <br />
                <label>CPF:</label>
                <input type="text" name="cpf" value={cpf}
                    onChange={(ev) => setCpf(ev.target.value)} />
                <br />
                <label>Email:</label>
                <input type="email" name="email" value={email}
                    onChange={(ev) => setEmail(ev.target.value)} />
                <br />
                <label>Telefone:</label>
                <input type="text" name="telefone" value={telefone}
                    onChange={(ev) => setTelefone(ev.target.value)} />
                <br />
                <label>Endereço:</label>
                <input type="text" name="endereco" value={endereco}
                    onChange={(ev) => setEndereco(ev.target.value)} />
                <input type="submit" value="Salvar" />
                <input type="button" value="Voltar" onClick={voltar} />
            </form>
        )
    }