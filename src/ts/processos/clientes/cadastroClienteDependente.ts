import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import Endereco from "../../modelos/endereco";
import Telefone from "../../modelos/telefone";
import CadastrarDocumentosCliente from "../documentos/cadastrarDocumentosCliente";

export default class CadastroClienteDependente extends Processo {
    processar(): void {
        console.log('Iniciando o cadastro de um novo cliente dependente...')
        let documentoTitular = this.entrada.receberTexto('Qual o documento do titular?')
        let armazem = Armazem.InstanciaUnica
        let titular = armazem.Clientes.find(cliente => cliente.Documentos.some(documento => documento.Numero === documentoTitular))
        if (titular === undefined) {
            console.log('Titular não encontrado.')
            return
        }
        
        let nome = this.entrada.receberTexto('Qual o nome do novo cliente dependente?')
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente dependente?')
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')
        let dependente = new Cliente(nome, nomeSocial, dataNascimento)
        
        dependente.Titular = titular
        titular.Telefones.forEach(telefone => dependente.Telefones.push(telefone.clonar() as Telefone))
        dependente.Endereco = (titular.Endereco.clonar() as Endereco)
        
        this.processo = new CadastrarDocumentosCliente(dependente)
        this.processo.processar()

        titular.Dependentes.push(dependente)
        armazem.Clientes.push(dependente)

        console.log('Finalizando o cadastro do cliente dependente...')
    }
}