import User from "./User.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    aprovarEstudante(estudante, curso) {
        return `${estudante} foi aprovado no curso ${curso}, responsável ${this.nome}`;
    }

}

const novoAdmin = new Docente("Ana", "ana@gmail.com", '2000-03-31');
console.log(novoAdmin);
console.log(novoAdmin.aprovarEstudante('Lucas', 'JavaScript'));