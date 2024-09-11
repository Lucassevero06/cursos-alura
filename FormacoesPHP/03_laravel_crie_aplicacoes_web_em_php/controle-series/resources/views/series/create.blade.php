<x-layout title="Criar Série">
    <h1>Nova Série</h1>

    <form action="{{ route('series.store') }}" method="post">
        @csrf
        <div class="row mb-3">
            <div class="col-6">
                <label class="form-label" for="nome">Nome:</label>
                <input
                    autofocus
                    class="form-control"
                    type="text"
                    name="nome"
                    id="nome"
                    value="{{ old('nome') }}">
            </div>

            <div class="col-3">
                <label class="form-label" for="seasonsQty">Nº Temp:</label>
                <input
                    class="form-control"
                    type="text"
                    name="seasonsQty"
                    id="seasonsQty"
                    value="{{ old('seasonsQty') }}">
            </div>

            <div class="col-3">
                <label class="form-label" for="episodesPerSeason">Eps/ Temp:</label>
                <input
                    class="form-control"
                    type="text"
                    name="episodesPerSeason"
                    id="episodesPerSeason"
                    value="{{ old('episodesPerSeason') }}">
            </div>
        </div>

        <button type="submit" class="btn btn-primary">Adicionar</button>
    </form>
</x-layout>
