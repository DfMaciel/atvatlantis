import Verificador from "../interfaces/verificador";
import Cliente from "../modelos/cliente";

export default class VerificaTitular implements Verificador {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        this.cliente = cliente
    }

    verificar(): boolean {
        let verificacao = false
        if (this.cliente.Titular == undefined) {
            verificacao = true
        }
        return verificacao
    }
}