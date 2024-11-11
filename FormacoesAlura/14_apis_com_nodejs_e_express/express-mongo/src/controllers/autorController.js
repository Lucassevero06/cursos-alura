import { autor } from '../models/Autor.js';

class AutorController {
    static async listarAutores (req, res) {
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores); 
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição`});
        }
    }

    static async listarAutorPorId (req, res) {
        try {
            const id = req.params.id;
            const autoresEncontrado = await autor.findById(id);
            res.status(200).json({autoresEncontrado}); 
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do autor`});
        }
    }

    static async cadastrarAutor (req, res) {
        try {
            const novoautores = await autor.create(req.body)
            res.status(201).json({ message: "criado com sucesso", autores: novoautores });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar autor`});
        }
    }

    static async atualizarAutor (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(201).json({ message: "atualizado com sucesso" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao atualizar autor`});
        }
    }

    static async excluirAutor (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(201).json({ message: "deletado com sucesso" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao deletar autor`});
        }
    }

}

export default AutorController;