export default class User {
    #nome;
    #email;
    #nascimento;
    #role;
    #ativo;

    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }

    get nome() {
        return this.#nome;
    }

    get email() {
        return this.#email;
    }

    get nascimento() {
        return this.#nascimento;
    }

    get role() {
        return this.#role;
    }

    get ativo() {
        return this.#ativo;
    }

    set nome(novoNome) {
        if (novoNome === '') {
            throw new Error('O formato do nome não é válido');
        }
        this.#nome = novoNome;
    }

    exibirInfos() {
        if (this.role === 'estudante') {
            return `estudante - ${this.nome}, ${this.email}`;
        }

        if (this.role === 'admin') {
            return `admin - ${this.nome}, ${this.email}`;
        }

        if (this.role === 'docente') {
            return `docente - ${this.nome}, ${this.email}`;
        }
    }

    static exibirInfosGenericas(nome, email) {
        return `${nome}, ${email}`;
    }
}
