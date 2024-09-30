import React, { Component } from 'react'
import './estilo.css';

class ListaDeCategorias extends Component {

    _handleEventoInput(e) {

        if (e.key === "Enter") {
            console.log("Adicionar categoria");
        }

    }

    render() { 
        return (
            <section className='lista-categorias'>
                <ul className='lista-categorias_lista'>
                    <li className='lista-categorias_item'>Categorias</li>
                    <li className='lista-categorias_item'>Categorias</li>
                    <li className='lista-categorias_item'>Categorias</li>
                    <li className='lista-categorias_item'>Categorias</li>
                </ul>
                <input 
                    onKeyUp={this._handleEventoInput.bind(this)}
                    className='lista-categorias_input' 
                    type="text" 
                    placeholder='Adicionar Categoria'    
                />
            </section>
        );
    }
}
 
export default ListaDeCategorias;