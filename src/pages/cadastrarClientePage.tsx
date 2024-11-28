import { Form, FloatingLabel } from 'react-bootstrap'
import { useState } from 'react'

export default function CadastrarClientePage () {
    const [tipoCliente, setTipoCliente] = useState("");

    const verificarTipoCliente = () => {
        if (tipoCliente === 'titular') {
            return (
                <Form className='formCadastroUsuario'>
                    <FloatingLabel controlId="floatingNome" label="Nome" className="mb-3">
                        <Form.Control type="text" placeholder="Nome" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
                        <Form.Control type="email" placeholder="Email" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTelefone" label="Telefone" className="mb-3">
                        <Form.Control type="tel" placeholder="Telefone" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingNascimento" label="Data de nascimento" className="mb-3">
                        <Form.Control type="date" placeholder="Data de nascimento" />
                    </FloatingLabel>
                </Form>
            )
        }
        if (tipoCliente === 'dependente') {
            return (
                <Form>
                    
                </Form>
            )
        }
        if (tipoCliente === "") {
            return (
                null
            )
        }
    }

    return (
        <div className="divTotalCadastro">
            <h1 style={{color: "white", marginTop: "2%"}}> Cadastrar um novo cliente </h1>
            <Form.Select aria-label="Default select example" className="formTipoUsuario" onChange={(e) => setTipoCliente(e.target.value)}>
                    <option value="" selected>Selecione o tipo de cliente</option>
                    <option value="titular">Titular</option>
                    <option value="dependente">Dependente</option>
            </Form.Select>
            {verificarTipoCliente()}
        </div>
    )
}