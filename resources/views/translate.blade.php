@extends('layouts.app')
@section('content')

<form method="post" action="/translate">
    @csrf

    <div class="input-group mb-3">
        <span class="input-group-text">Word</span>
        <input type="text" name="text_input" class="form-control" placeholder="" aria-label="Word">
    </div>
    <button type="submit">ELo</button>
</form>

{{ $text ?? ""}}

@endsection