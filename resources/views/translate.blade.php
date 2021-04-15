@extends('layouts.app')
@section('content')



@livewireStyles


    @csrf
    @livewire('translator')

@livewireScripts
@endsection