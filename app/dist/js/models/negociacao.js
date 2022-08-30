export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        const negociacao = new Negociacao(date, quantidade, valor);
        return negociacao;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    paraTexto() {
        return `
      Data: ${this.data},
      Quantidade: ${this.quantidade},
      Valor: ${this.valor},
    `;
    }
    ehIgual(negociacao) {
        const data = this.data;
        return data.getDate() === negociacao.data.getDate() && data.getMonth() === negociacao.data.getMonth() && data.getFullYear() === negociacao.data.getFullYear();
    }
}
//# sourceMappingURL=negociacao.js.map