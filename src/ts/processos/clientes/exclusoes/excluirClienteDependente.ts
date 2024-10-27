import Processo from "../../../abstracoes/processo";
import Cliente from "../../../modelos/cliente";
import Armazem from "../../../dominio/armazem";
import { Busca } from "../../../interfaces/busca";
import BuscarCliente from "../../../buscas/buscarCliente";

export default class ExcluirClienteDependente extends Processo {
    private clientes: Cliente[]
    private documentoDependente: string
    private busca!: Busca
    constructor(documentoDependente: string) {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.documentoDependente = documentoDependente
    }

    processar(): void {
        this.busca = new BuscarCliente (this.documentoDependente)
        let cliente = this.busca.buscar()
        if (cliente) {
            if (cliente.Titular) {
                let titular = cliente.Titular
                titular.Dependentes = titular.Dependentes.filter(dependente => dependente !== cliente)
            }
            let indice = this.clientes.indexOf(cliente)
            this.clientes.splice(indice, 1)
            console.log(`Cliente dependente ${cliente.Nome} excluído com sucesso!`)
        } else {
            console.log('Cliente não encontrado!')
        }
    }
}