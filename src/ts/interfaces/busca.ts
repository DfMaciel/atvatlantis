import Cliente from "../modelos/cliente";

export interface Busca {
    buscar(): Cliente | null | undefined
}

export interface BuscaLista {
    buscarVarios(): Cliente[] | undefined
}