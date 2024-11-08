import mongoose from "mongoose";

//model livro
const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId }, //id uniques
    titulo: { type: String, required: true },
    editora: { type: String, required: true },
    preco: { type: Number, required: true },
    paginas: { type: Number, required: true },
}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema);
export default livro;