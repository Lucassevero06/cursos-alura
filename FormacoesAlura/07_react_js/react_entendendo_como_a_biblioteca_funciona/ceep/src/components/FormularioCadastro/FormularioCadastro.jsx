import React, {Component} from "react";
import './estilo.css';

class FormularioCadastro extends Component {
    constructor(props) {
        super(props);
        this.titulo = '';
        this.texto = '';
    }

    _handleMudancaDeTitulo(evento) {
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }

    _handleMudancaDeTexto(evento) {
        evento.stopPropagation();
        this.texto = evento.target.value;
    }

    _criarNota(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto);
    }
    
    render() {
        return  (
            <form 
                className="form-cadastro"
                onSubmit={this._criarNota.bind(this)}
            >
                <select className="form-cadastro_input">
                    <option value="">Selecione uma Categoria</option>
                    {this.props.categorias.map((categoria, index) => {
                        return (
                            <option key={index}>{categoria}</option>
                        );
                    })}
                </select>
                <input
                    type="text" 
                    placeholder='titulo'
                    className="form-cadastro_input"
                    onChange={this._handleMudancaDeTitulo.bind(this)}
                />
                <textarea 
                    rows={15}
                    placeholder='escreva sua nota'
                    className="form-cadastro_input"
                    onChange={this._handleMudancaDeTexto.bind(this)}
                />

                <button className="form-cadastro_input form-cadastro_submit">
                    Criar nota
                </button>
            </form>
        );
    }
}

export default FormularioCadastro;