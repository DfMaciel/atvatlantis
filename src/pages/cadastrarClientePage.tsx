import { Form, FloatingLabel, Accordion, Button } from 'react-bootstrap'
import { useState } from 'react'

interface Documento {
    tipo: string;
    numero: string;
    dataEmissao: string;
}

interface Telefone {
    ddd: string;
    numero: string;
}

export default function CadastrarClientePage () {
    const [tipoCliente, setTipoCliente] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [rua, setRua] = useState("");
    const [numeroRua, setNumeroRua] = useState("");
    const [cep, setCep] = useState("");
    const [documentos, setDocumentos] = useState([{ tipo: "", numero: "", dataEmissao: "" }]);
    const [telefones, setTelefones] = useState([{ ddd: "", numero: "" }]);
    const [documentoTitular, setDocumentoTitualr] = useState("");

    const handleAddDocumento = () => {
        setDocumentos([...documentos, { tipo: "", numero: "", dataEmissao: "" }]);
    };

    const handleAddTelefone = () => {
        setTelefones([...telefones, { ddd: "", numero: "" }]);
    };

    const handleDocumentoChange = (index: number, field: keyof Documento, value: string) => {
        const newDocumentos = [...documentos];
        newDocumentos[index][field] = value;
        setDocumentos(newDocumentos);
    };

    const handleTelefoneChange = (index: number, field: keyof Telefone, value: string) => {
        const newTelefones = [...telefones];
        newTelefones[index][field] = value;
        setTelefones(newTelefones);
    };

    const handleRemoveDocumento = (index: number) => {
        const newDocumentos = documentos.filter((_, i) => i !== index);
        setDocumentos(newDocumentos);
    };

    const handleRemoveTelefone = (index: number) => {
        const newTelefones = telefones.filter((_, i) => i !== index);
        setTelefones(newTelefones);
    };

    const verificarTipoCliente = () => {
        if (tipoCliente === 'titular') {
            return (
                <Form className='formCadastroUsuario'>
                    <Accordion className="accordionCustom" alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <Form.Label style={{ color: "white", fontSize: "1.8em", fontWeight: "bold" }}>Informações gerais:</Form.Label>
                            </Accordion.Header>
                            <Accordion.Body>
                                <FloatingLabel controlId="floatingNome" label="Nome" className="mb-3">
                                    <Form.Control type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
                                    <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingNascimento" label="Data de nascimento" className="mb-3">
                                    <Form.Control type="date" placeholder="Data de nascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
                                </FloatingLabel>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <Form.Label style={{ color: "white", fontSize: "1.8em", fontWeight: "bold" }}>Endereço:</Form.Label>
                            </Accordion.Header>
                            <Accordion.Body>
                                <FloatingLabel controlId="floatingEstado" label="Estado" className="mb-3">
                                    <Form.Control type="text" placeholder="Estado" value={estado} onChange={(e) => setEstado(e.target.value)} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingCidade" label="Cidade" className="mb-3">
                                    <Form.Control type="text" placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingRua" label="Rua" className="mb-3">
                                    <Form.Control type="text" placeholder="Rua" value={rua} onChange={(e) => setRua(e.target.value)} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingNumeroRua" label="Número" className="mb-3">
                                    <Form.Control type="text" placeholder="Número" value={numeroRua} onChange={(e) => setNumeroRua(e.target.value)} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingCep" label="CEP" className="mb-3">
                                    <Form.Control type="text" placeholder="CEP" value={cep} onChange={(e) => setCep(e.target.value)} />
                                </FloatingLabel>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <Form.Label style={{ color: "white", fontSize: "1.8em", fontWeight: "bold" }}>Documentos:</Form.Label>
                            </Accordion.Header>
                            <Accordion.Body>
                                {documentos.map((documento, index) => (
                                        <div key={index} className="d-flex align-items-center mb-3">
                                            <div className="flex-grow-1">
                                                <FloatingLabel controlId={`floatingTipoDocumento${index}`} label="Tipo de Documento" className="mb-3">
                                                    <Form.Select aria-label="Tipo de Documento" value={documento.tipo} onChange={(e) => handleDocumentoChange(index, 'tipo', e.target.value)}>
                                                        <option value="">Selecione o tipo de documento</option>
                                                        <option value="cpf">CPF</option>
                                                        <option value="rg">RG</option>
                                                        <option value="passaporte">Passaporte</option>
                                                    </Form.Select>
                                                </FloatingLabel>
                                                <FloatingLabel controlId={`floatingNumeroDocumento${index}`} label="Número do documento" className="mb-3">
                                                    <Form.Control type="text" placeholder="Número do documento" value={documento.numero} onChange={(e) => handleDocumentoChange(index, 'numero', e.target.value)} />
                                                </FloatingLabel>
                                                <FloatingLabel controlId={`floatingDataEmissao${index}`} label="Data de emissão" className="mb-3">
                                                    <Form.Control type="date" placeholder="Data de emissão" value={documento.dataEmissao} onChange={(e) => handleDocumentoChange(index, 'dataEmissao', e.target.value)} />
                                                </FloatingLabel>
                                            </div>
                                        </div>
                                    ))}
                                <div className="d-flex justify-content-between">
                                    <Button className="botaoAdicionarDocumento" onClick={handleAddDocumento}>Adicionar Documento</Button>
                                    {documentos.length > 1 && (
                                        <Button variant="danger" onClick={() => handleRemoveDocumento(documentos.length - 1)}>Excluir Último Documento</Button>
                                    )}
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                <Form.Label style={{ color: "white", fontSize: "1.8em", fontWeight: "bold" }}>Telefones:</Form.Label>
                            </Accordion.Header>
                            <Accordion.Body>
                            {telefones.map((telefone, index) => (
                                    <div key={index} className="d-flex align-items-center mb-3">
                                        <div className="flex-grow-1">
                                            <FloatingLabel controlId={`floatingDdd${index}`} label="DDD" className="mb-3">
                                                <Form.Control type="text" placeholder="DDD" value={telefone.ddd} onChange={(e) => handleTelefoneChange(index, 'ddd', e.target.value)} />
                                            </FloatingLabel>
                                            <FloatingLabel controlId={`floatingNumeroTelefone${index}`} label="Número" className="mb-3">
                                                <Form.Control type="text" placeholder="Número" value={telefone.numero} onChange={(e) => handleTelefoneChange(index, 'numero', e.target.value)} />
                                            </FloatingLabel>
                                        </div>
                                    </div>
                                ))}
                                <div className="d-flex justify-content-between">
                                    <Button className="botaoAdicionarDocumento" onClick={handleAddTelefone}>Adicionar Telefone</Button>
                                    {telefones.length > 1 && (
                                        <Button variant="danger" onClick={() => handleRemoveTelefone(telefones.length - 1)}>Excluir Último Telefone</Button>
                                    )}
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <div className="botaoEnviarForm">
                        <Button size="lg">Cadastrar</Button>
                    </div>
                </Form>
            )
        }
        if (tipoCliente === 'dependente') {
            return (
                <Form className='formCadastroUsuario'>
                    <FloatingLabel controlId="floatingDocumentoTitular" label="Documento do titular" className="mb-3">
                        <Form.Control type="text" placeholder="Documento do titular" value={documentoTitular} onChange={(e) => setDocumentoTitualr(e.target.value)} />
                    </FloatingLabel>
                    {documentoTitular !== "" ? (
                        <>
                            <Accordion className="accordionCustom" alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <Form.Label style={{ color: "white", fontSize: "1.8em", fontWeight: "bold" }}>Informações gerais:</Form.Label>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <FloatingLabel controlId="floatingNome" label="Nome" className="mb-3">
                                            <Form.Control type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                                        </FloatingLabel>
                                        <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
                                            <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </FloatingLabel>
                                        <FloatingLabel controlId="floatingNascimento" label="Data de nascimento" className="mb-3">
                                            <Form.Control type="date" placeholder="Data de nascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
                                        </FloatingLabel>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <Form.Label style={{ color: "white", fontSize: "1.8em", fontWeight: "bold" }}>Documentos:</Form.Label>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        {documentos.map((documento, index) => (
                                            <div key={index} className="d-flex align-items-center mb-3">
                                                <div className="flex-grow-1">
                                                    <FloatingLabel controlId={`floatingTipoDocumento${index}`} label="Tipo de Documento" className="mb-3">
                                                        <Form.Select aria-label="Tipo de Documento" value={documento.tipo} onChange={(e) => handleDocumentoChange(index, 'tipo', e.target.value)}>
                                                            <option value="">Selecione o tipo de documento</option>
                                                            <option value="cpf">CPF</option>
                                                            <option value="rg">RG</option>
                                                            <option value="passaporte">Passaporte</option>
                                                        </Form.Select>
                                                    </FloatingLabel>
                                                    <FloatingLabel controlId={`floatingNumeroDocumento${index}`} label="Número do documento" className="mb-3">
                                                        <Form.Control type="text" placeholder="Número do documento" value={documento.numero} onChange={(e) => handleDocumentoChange(index, 'numero', e.target.value)} />
                                                    </FloatingLabel>
                                                    <FloatingLabel controlId={`floatingDataEmissao${index}`} label="Data de emissão" className="mb-3">
                                                        <Form.Control type="date" placeholder="Data de emissão" value={documento.dataEmissao} onChange={(e) => handleDocumentoChange(index, 'dataEmissao', e.target.value)} />
                                                    </FloatingLabel>
                                                </div>
                                            </div>
                                            ))}
                                        <div className="d-flex justify-content-between">
                                            <Button className="botaoAdicionarDocumento" onClick={handleAddDocumento}>Adicionar Documento</Button>
                                            {documentos.length > 1 && (
                                                <Button variant="danger" onClick={() => handleRemoveDocumento(documentos.length - 1)}>Excluir Último Documento</Button>
                                            )}
                                        </div>
                                    </Accordion.Body>
                            </Accordion.Item>
                            </Accordion>
                            <div className="botaoEnviarForm">
                                <Button size="lg">Cadastrar</Button>
                            </div>
                        </>
                    ) : (
                       null )}
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