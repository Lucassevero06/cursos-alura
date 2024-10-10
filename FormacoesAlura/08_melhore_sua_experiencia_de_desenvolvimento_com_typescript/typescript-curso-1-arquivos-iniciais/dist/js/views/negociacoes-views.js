export default class NegociacoesViews {
    constructor(seletor) {
    }
    template() {
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
                    <tr>
                        <td colspan="3"></td>
                        <td class="text-right">
                            <strong></strong>
                        </td>
                    </tr>
                </tbody>
            </table>
        `;
    }
}
