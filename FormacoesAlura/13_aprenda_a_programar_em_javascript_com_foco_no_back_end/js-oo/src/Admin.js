import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    criarCurso(nomeCurso, qtdVagas) {
        return `Curso ${nomeCurso} criado com ${qtdVagas} vagas.`;
    }
}

// const novoAdmin = new Admin('Rodrigo', 'rogrigo@gmail.com', '2000-03-31');
// console.log(novoAdmin);
// console.log(novoAdmin.criarCurso('JavaScript', 20));