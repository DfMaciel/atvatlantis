import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressaorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";
import VerificaDependente from "../../verificadores/verificaDependente";

export default class ListagemDependentes extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        console.log('Iniciando a listagem dos clientes dependentes...')
        this.clientes.forEach(cliente => {
            let verificador = new VerificaDependente(cliente)
            if (verificador.verificar() || cliente.Titular === null) {
                this.impressor = new ImpressaorCliente(cliente, true)
                console.log(this.impressor.imprimir())
            }
        })
    }
}