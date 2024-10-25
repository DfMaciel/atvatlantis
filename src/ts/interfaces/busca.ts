import Cliente from "../modelos/cliente";

export interface Busca {
    buscar(): Cliente | undefined
}

export interface BuscaLista {
    buscarVarios(): Cliente[] | undefined
}