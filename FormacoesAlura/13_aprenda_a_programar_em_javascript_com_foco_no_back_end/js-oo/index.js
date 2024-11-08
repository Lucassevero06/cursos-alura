import User from "./src/User.js";
import Admin from "./src/Admin.js";
import Docente from "./src/Docente.js";

const novoUser = new User('Juliana', 'juliana@gmail.com', '2000-03-31');
console.log(novoUser.exibirInfos());

const dadosFicticios = User.exibirInfosGenericas('Cassio', 'cassio@gmail.com');
console.log(dadosFicticios);
// const novoAdmin = new Admin('Rodrigo', 'rodrigo@gmail.com', '2000-03-31');
// console.log(novoAdmin.exibirInfos());

// const novoDocente = new Docente('Ana', 'ana@gmail.com', '2000-03-31');
// console.log(novoDocente.exibirInfos());