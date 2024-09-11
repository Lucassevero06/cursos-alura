<x-layout title="Séries">

    <h1>Series</h1>
    <a class="btn btn-dark mb-2" href="/series/criar">Criar Série</a>

    <ul class="list-group">
        @foreach($series as $serie)
            <li class="list-group-item">{{ $serie }}</li>
        @endforeach
    </ul>

</x-layout>
