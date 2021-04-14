@extends('layouts.app')
@section('content')



@livewireStyles


    @csrf
    <div class="container">
        <div class="row">
            <div class="col-2"></div>
            <div class="col-8">
                @livewire('buttons')
            </div>
            <div class="col-2"></div>
        </div>
        <div class="row">
            <div class="col-2"></div>
            <div class="col-8">
                @livewire('translator')
            </div>
            <div class="col-2"></div>
        </div>
    </div>

@livewireScripts
@endsection