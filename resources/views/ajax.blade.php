@extends('layouts.app')

@section('content')
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <input type="text" id="myText" name="name">
    <button id="btn">Send</button>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

    <script >
        let val = document.getElementById("myText")
        val.addEventListener('input', () => {
            
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
            $.ajax({
                method: "POST",
                url: "/ajax-test",
                data: { name: val.value }
            })
            .done(function(response){
                console.log(response)
            })
        })
        
    </script>
@endsection