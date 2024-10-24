import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";
import Impressor from "../interfaces/impressor";
import ImpressaorCliente from "./impressorCliente";

export default class ImpressorDependentes implements Impressor {
    private dependentes: Cliente[]
    private impressor!: Impressor

    constructor(dependentes: Cliente[]) {
        this.dependentes = dependentes
    }

    imprimir(): string {
        let impressao = ''
        impressao = impressao + `Dependentes:\n`
        // this.cliente.Dependentes.forEach(dependente => {
        //     let impressor = new ImpressaorCliente(dependente)
        //     console.log(impressor.imprimir())
        // });
        for (let index = 0; index < this.dependentes.length; index++) {
            this.impressor = new ImpressaorCliente(this.dependentes[index])
            if (index == 0) {
                impressao = impressao + `${this.impressor.imprimir()}`
            } else {
                impressao = impressao + `\n${this.impressor.imprimir()}`
            }
        }
        return impressao
    }
}