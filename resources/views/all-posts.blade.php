@extends('layouts.app')

@section('content')
@livewireStyles
    <div class="container">
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                @livewire('counter')
            </div>
            <div class="col-3"></div>
        </div>
    </div>
    @livewireScripts
@endsection
    
