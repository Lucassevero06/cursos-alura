<x-layout title="Registrar">
    <h1>Novo Usuário</h1>
    <form action="" method="post">
        @csrf
        <div class="form-group">
            <label class="form-label" for="name">Nome</label>
            <input type="text" name="name" id="name" class="form-control">
        </div>

        <div class="form-group">
            <label class="form-label" for="email">E-mail</label>
            <input type="email" name="email" id="email" class="form-control">
        </div>

        <div class="form-group">
            <label class="form-label" for="password">Senha</label>
            <input type="password" name="password" id="password" class="form-control">
        </div>

        <button class="btn btn-primary mt-3">Registrar</button>
    </form>
</x-layout>
