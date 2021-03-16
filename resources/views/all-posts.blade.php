@extends('layouts.app')

@section('content')
@livewireStyles
    <div class="container">
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">@foreach ($all as $item)
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">{{$item->title}}</h5>
                            <p class="card-text">{{$item->content}}</p>
                            @livewire('counter', ['post_id' => $item->id])
                    </div>
                </div>
                @endforeach
            </div>
            <div class="col-3"></div>
        </div>
    </div>
    @livewireScripts
@endsection
    
