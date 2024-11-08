import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    aprovarEstudante(estudante, curso) {
        return `${estudante} foi aprovado no curso ${curso}, responsável ${this.nome}`;
    }

}