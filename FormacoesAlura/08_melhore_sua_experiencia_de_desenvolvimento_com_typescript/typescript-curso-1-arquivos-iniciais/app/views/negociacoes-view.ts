import Negociacoes from "../models/negociacoes.js";
import View from "./view.js";

export default class NegociacoesViews extends View<Negociacoes> {

    protected template(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered"></table>
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.lista().map(negociacao =>{
                        return `
                            <tr>
                                <td>${this.formatarData(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        `;
    }

    private formatarData(data: Date) {
        return new Intl.DateTimeFormat()
            .format(data)
    }
}