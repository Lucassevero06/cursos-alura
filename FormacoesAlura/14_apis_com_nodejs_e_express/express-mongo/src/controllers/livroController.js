import livro from '../models/Livro.js';

class LivroController {
    static async listarLivros (req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros); 
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição`});
        }
    }

    static async listarLivroPorId (req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json({livroEncontrado}); 
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do livro`});
        }
    }

    static async cadastrarLivro (req, res) {
        try {
            const novoLivro = await livro.create(req.body)
            res.status(201).json({ message: "criado com sucesso", livro: novoLivro });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro`});
        }
    }

    static async atualizarLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(201).json({ message: "atualizado com sucesso" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao atualizar livro`});
        }
    }

    static async excluirLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(201).json({ message: "deletado com sucesso" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao deletar livro`});
        }
    }

}

export default LivroController;