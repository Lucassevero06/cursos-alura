<x-layout title="Criar">
    <h1>Nova Série</h1>
    <form action="{{ route('series.store') }}" method="post">
        @csrf
        <div class="mb-3">
            <label class="form-label" for="nome">Nome:</label>
            <input class="form-control" type="text" name="nome" id="nome">
        </div>

        <button type="submit" class="btn btn-primary">Adicionar</button>
    </form>
</x-layout>
