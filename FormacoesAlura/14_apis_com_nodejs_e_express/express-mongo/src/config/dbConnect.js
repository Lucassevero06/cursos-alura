import mongoose, { mongo } from "mongoose";

async function conectaNaDatabase() {
    mongoose.connect('mongodb+srv://mongodb:mongodb@cluster0.hmkp6.mongodb.net/livraria-alura?retryWrites=true&w=majority&appName=Cluster0');

    return mongoose.connection;
}

export default conectaNaDatabase;