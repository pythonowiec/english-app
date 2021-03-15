@extends('layouts.app')

@section('content')
    <h1>Hello {{Auth::user()->name}}</h1>
    <h3>{{ $post }}</h3>  
@endsection
