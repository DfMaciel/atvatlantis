import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressaorCliente from "../../impressores/impressorCliente";
import ImpressorDependentes from "../../impressores/impressorDependentes";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class ListagemDependentesEspecificos extends Processo {
    private impressor!: Impressor
    private cliente: Cliente | undefined
    private documentoTitular: string
    constructor(documentoTitular: string) {
        super()
        this.documentoTitular = documentoTitular
        this.cliente = Armazem.InstanciaUnica.Clientes.find(cliente => cliente.Documentos.some(documento => documento.Numero === documentoTitular))
    }

    processar(): void {
        console.clear()
        if (this.cliente === undefined) {
            console.log('Titular não encontrado.')
            return
        }
        console.log('Listagem de dependentes de um titular especifico...')
        let impressor = new ImpressorDependentes(this.cliente.Dependentes, false)
        console.log(impressor.imprimir())
    }
}