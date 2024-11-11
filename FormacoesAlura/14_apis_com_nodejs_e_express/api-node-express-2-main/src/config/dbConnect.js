import mongoose from "mongoose"

mongoose.connect("mongodb+srv://mongodb:mongodb@cluster0.hmkp6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

let db = mongoose.connection;

export default db;