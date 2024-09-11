<x-layout title="Séries">

    <h1>Series</h1>
    <a href="/series/criar">Criar Série</a>

    <ul>
        @foreach($series as $serie)
            <li>{{ $serie }}</li>
        @endforeach
    </ul>

</x-layout>
