@extends('layouts.app')
@section('content')



@livewireStyles


    @csrf
    <div class="container">
        <div class="row">
            <div class="col-2"></div>
    <div class="col-4 languages" style="padding: 0 0 0 15px !important;" wire:ignore>
        <div class="accordion lang_accordion" id="source_lang">
            <div class="accordion-item" style="border-radius: .25rem 0 0 0 !important;">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#source_lang">
                <div class="accordion-body">
                    @livewire('buttons')
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

@livewireScripts
@endsection