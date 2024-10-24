import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";

export default class ExcluirClienteTitular extends Processo {
    private clientes: Cliente[]
    constructor(clientes: Cliente[]) {
        super()
        this.clientes = clientes
    }

    processar(): void {
        let documentoCliente = this.entrada.receberTexto('Qual o número do documento do cliente que deseja excluir?')
        let cliente = this.clientes.find(cliente => cliente.Documentos.some(documento => documento.Numero === documentoCliente))
        if (cliente) {
            let indice = this.clientes.indexOf(cliente)
            cliente.Dependentes.forEach(dependente => {
                dependente.Titular = false
            })
            this.clientes.splice(indice, 1)
            console.log(`Cliente ${cliente.Nome} excluído com sucesso!`)
        } else {
            console.log('Cliente não encontrado!')
        }
    }
}