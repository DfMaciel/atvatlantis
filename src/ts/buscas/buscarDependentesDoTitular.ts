import {BuscaLista} from "../interfaces/busca";
import Cliente from "../modelos/cliente";
import BuscarClienteTitular from "./buscarCliente";

export default class BuscarDependentesDoTitular implements BuscaLista {
    private documentoDependente: string

    constructor(documentoDependente: string) {
        this.documentoDependente = documentoDependente
    }

    buscarVarios(): Cliente[] | undefined {
        let busca = new BuscarClienteTitular(this.documentoDependente)
        let cliente = busca.buscar()
        if (cliente) {
            let dependentes = cliente.Dependentes
            if (dependentes.length < 1) {
                console.log("Dependentes não encontrados!")
                return
            }
            else {
                return dependentes
            }
        }
        else {
            console.log("Titular não encontrado!")
            return 
        }  
    }
}