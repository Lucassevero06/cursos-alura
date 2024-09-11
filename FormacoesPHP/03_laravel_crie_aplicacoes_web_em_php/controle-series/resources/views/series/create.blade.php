<x-layout title="Criar Série">
    <h1>Nova Série</h1>
    <x-series.form action="{{ route('series.store') }}" :nome="old('nome')" :update="false"/>
</x-layout>
