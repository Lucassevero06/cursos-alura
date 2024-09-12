<x-layout title="Séries">
    <h1>Temporadas de: {{ $series->nome }}</h1>
    <ul class="list-group">
        @foreach($seasons as $season)
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Temporada: {{ $season->number }}

                <span class="badge bg-secondary">
                    {{ $season->episodes()->count() }}
                </span>
            </li>
        @endforeach
    </ul>

</x-layout>
