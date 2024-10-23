import Cliente from "../../modelos/cliente"
import Processo from "../../abstracoes/processo"
import Telefone from "../../modelos/telefone"

export default class CadastroTelefonesCliente extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }
    processar(): void {
        let execucao = true
        while (execucao) {
            console.log('Iniciando o cadastro de um novo telefone...')
            let ddd = this.entrada.receberTexto('Qual o DDD?')
            let numero = this.entrada.receberTexto('Qual o número do telefone?')
            let telefone = new Telefone(ddd, numero)
            this.cliente.Telefones.push(telefone)
            let respostaUsuario = this.entrada.receberTexto('Deseja cadastrar mais um telefone? (s/n)').toLowerCase()
            if (respostaUsuario !== 's' && respostaUsuario !== 'n') {
                console.log('Opção inválida. Por favor, responda "s" para sim ou "n" para não.')
                let respostaUsuario = this.entrada.receberTexto('Deseja cadastrar mais um telefone? (s/n)').toLowerCase()
                continue
            }
            execucao = respostaUsuario === 's'
        }
    }
}