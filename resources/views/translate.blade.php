@extends('layouts.app')
@section('content')



@livewireStyles


    @csrf
    <div class="container">
        <div class="row">
            <div class="col-2"></div>
            <div class="col-8">
                @livewire('translator')
            </div>
            <div class="col-2"></div>
        </div>
    </div>





    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  
    <script>
          $.getJSON("data.json", function(json) {
              //console.log(json['languages'][0]); 
              var data = json['languages']
  
              Array.from(data).forEach(function(item) {
                  Object.keys(item).forEach(function(key) {
                      console.log("key:" + key + " value:" + item[key]);
                  });
              });
  
          });
      </script>

@livewireScripts
@endsection