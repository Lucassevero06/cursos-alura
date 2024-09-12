<x-layout title="Login">
    <h1>Login</h1>
    <form action="" method="post">
        @csrf
        <div class="form-group">
            <label class="form-label" for="email">E-mail</label>
            <input type="email" name="email" id="email" class="form-control">
        </div>

        <div class="form-group">
            <label class="form-label" for="password">Senha</label>
            <input type="password" name="password" id="password" class="form-control">
        </div>

        <button class="btn btn-primary mt-3">Entrar</button>

        <a class="btn btn-secondary mt-3" href="{{ route('users.create') }}">Registrar</a>
    </form>
</x-layout>
'
