@extends('layouts.app')

@section('content')

    <div class="container">
        @csrf
        <div class="row">
            <div class="col-1"></div>
            <div class="col-9 mb-5">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    @foreach ($titles as $title)
                        <li class="nav-item">
                            @if($loop->first)
                                <a class="nav-link active" id="{{$title[0]['dictionary']}}-tab" data-toggle="tab" href="#{{$title[0]['dictionary']}}" role="tab" aria-controls="{{$title[0]['dictionary']}}" aria-selected="true">{{$title[0]['dictionary']}}</a>
                            @else
                                <a class="nav-link" id="{{$title[0]['dictionary']}}-tab" data-toggle="tab" href="#{{$title[0]['dictionary']}}" role="tab" aria-controls="{{$title[0]['dictionary']}}" aria-selected="true">{{$title[0]['dictionary']}}</a>
                            @endif
                        </li>
                    @endforeach
                </ul>
                <div class="tab-content" id="myTabContent">
                    @foreach ($titles as $title)
                        @if ($loop->first)
                            <div class="tab-pane fade active show" id="{{$title[0]['dictionary']}}" role="tabpanel" aria-labelledby="{{$title[0]['dictionary']}}-tab">
                        @else
                            <div class="tab-pane fade" id="{{$title[0]['dictionary']}}" role="tabpanel" aria-labelledby="{{$title[0]['dictionary']}}-tab">
                        @endif
                            <table class="table">
                                <thead class="thead-dark">
                                <tr>
                                    <th class="bg-primary" scope="col">Polish</th>
                                    <th class="bg-primary" scope="col">English</th>
                                    <th class="bg-primary" scope="col"></th>
                                </tr>
                                </thead>
                                <tbody>
                                    @foreach ($title as $word)
                                        <tr>
                                            <td>{{ $word->polish }}</td>
                                            <td>{{ $word->english }}</td>
                                            <td><button data-id="{{ $word->id }}" class="btn btn-danger delete-btn"><img src="/images/delete.png" alt="" srcset=""></button></td> 
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    @endforeach
                </div>
            </div>
            <div class="col-2">
                <a href="{{ url('/dictionaries/add') }}"><button id="add" class="btn btn-primary"><img  height="30" width="30" src="{{ asset('images/plus.png') }}"></button></a>
                <button class="btn btn-success" id="play">Play</button>
            </div>
        </div>
    </div>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="{{asset('js/game.js')}}"></script>
@endsection