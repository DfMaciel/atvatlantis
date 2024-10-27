import Processo from "../../../abstracoes/processo";
import Cliente from "../../../modelos/cliente";
import Armazem from "../../../dominio/armazem";
import { Busca } from "../../../interfaces/busca";
import BuscarCliente from "../../../buscas/buscarCliente";

export default class ExcluirClienteTitular extends Processo {
    private clientes: Cliente[]
    private documentoTitular: string
    private busca!: Busca
    constructor(documentoTitular: string) {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.documentoTitular = documentoTitular
    }

    processar(): void {
        this.busca = new BuscarCliente (this.documentoTitular)
        let cliente = this.busca.buscar()
        if (cliente) {
            let indice = this.clientes.indexOf(cliente)
            cliente.Dependentes.forEach(dependente => {
                dependente.Titular = null
            })
            this.clientes.splice(indice, 1)
            let input = this.entrada.receberTexto(`Cliente ${cliente.Nome} excluído com sucesso!, pressione qualquer tecla para continuar...`)
        } else {
            console.log('Cliente não encontrado!')
        }
    }
}   