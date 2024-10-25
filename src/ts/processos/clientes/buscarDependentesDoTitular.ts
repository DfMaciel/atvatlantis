import {Busca, BuscaLista} from "../../interfaces/busca";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import BuscarClienteTitular from "./buscarClienteTitular";

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
            if (dependentes.length === 0) {
                return undefined
            }
        }
        else {
            return undefined
        }  
    }
}