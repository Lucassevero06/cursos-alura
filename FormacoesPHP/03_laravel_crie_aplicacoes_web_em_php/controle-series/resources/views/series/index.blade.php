<x-layout title="Séries" :mensagemSucesso="$mensagemSucesso">

    <h1>Series</h1>
    <a class="btn btn-dark mb-2" href="{{ route('series.create') }}">Criar Série</a>

    <ul class="list-group">
        @foreach($series as $serie)
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <a href="{{ route('seasons.index', $serie->id) }}">{{ $serie->nome }}</a>

                <span class="d-flex">
                    <a href="{{ route('series.edit', $serie->id) }}" class="btn btn-primary btn-sm">
                        E
                    </a>
                    <form action="{{ route('series.destroy', $serie->id) }}" method="post" class="ms-1">
                        @csrf
                            @method('DELETE')
                        <button class="btn btn-danger btn-sm">
                            X
                        </button>
                    </form>
                </span>
            </li>
        @endforeach
    </ul>

</x-layout>
