<x-layout title="Editar Série">
    <h1>Editar Série: {{ $serie->nome }}</h1>
    <x-series.form :action="route('series.update', $serie->id)" :nome="$serie->nome" :update="true" />
</x-layout>
