@extends('layouts.app')
@section('content')



@livewireStyles


    @csrf
    <div class="container">
        <div class="row">
            <div class="col-2"></div>
            <div class="col-4 languages" style="padding: 0 0 0 15px !important;">
                <div class="accordion lang_accordion" id="source_lang">
                    <div class="accordion-item" style="border-radius: .25rem 0 0 0 !important;">
                      <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          
                        </button>
                      </h2>
                      <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#source_lang">
                        <div class="accordion-body">
                            <table class="table table-borderless">
                                <tbody id="lang_body">
                                  
                                </tbody>
                              </table>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <div class="col-4 languages" style="padding: 0 15px 0 0 !important;">
                <div class="accordion lang_accordion" id="target_lang">
                    <div class="accordion-item" style="border-radius: 0 .25rem 0 0 !important;">
                      <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                          
                        </button>
                      </h2>
                      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#target_lang">
                        <div class="accordion-body" id="lang_body2">
                          <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                      </div>
                    </div>
                </div>
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





    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  
    <script>
          $.getJSON("data.json", function(json) {
            //console.log(json['languages'][0]);
            var data = json['languages'];
            var lang_body = document.getElementById('lang_body');

            Array.from(data).forEach(function(item, i) {
                Object.keys(item).forEach(function(key){
                    if(i==0){
                        lang_body.innerHTML = "<tr>";
                        console.log(i);
                    }

                    if((i%3==0) && (i!=0)){
                        lang_body.innerHTML = lang_body.innerHTML + "</tr>";
                        lang_body.innerHTML = lang_body.innerHTML + "<tr>";
                        console.log(i);
                    }

                    $('#lang_body').append(`<th scope="row"></th><td class="lang">${key}</td>`);
                    console.log("key:" + key + " value:" + item[key] + " i: " + i);
                });
            });
        });
      </script>

@livewireScripts
@endsection