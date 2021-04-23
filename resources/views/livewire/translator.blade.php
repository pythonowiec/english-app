<div>
    <div class="container">
        <div class="row">
            <div class="col-2"></div>
            <div class="col-4 languages" style="padding: 0 0 0 15px !important;">
                <div class="accordion lang_accordion" id="source_lang">
                    <div class="accordion-item" style="border-radius: .25rem 0 0 0 !important;">
                        <h2 class="accordion-header" id="headingOne" wire:ignore>
                            <button class="accordion-button collapsed" id="collapseOneBtn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"></button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#source_lang"  wire:ignore>
                            <div class="accordion-body">
                                <table class="table table-borderless">
                                    <tbody id="lang_body">
                            
                                    </tbody>
                                </table>
                                <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
                                <script src="js/translate.js"></script>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4 languages" style="padding: 0 15px 0 0 !important;">
                <div class="accordion lang_accordion" id="target_lang">
                    <div class="accordion-item" style="border-radius: 0 .25rem 0 0 !important;">
                        <h2 class="accordion-header" id="headingTwo" wire:ignore>
                            <button class="accordion-button collapsed" id="collapseTwoBtn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo"></button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#target_lang" wire:ignore>
                            <div class="accordion-body">
                                <table class="table table-borderless">
                                    <tbody id="lang_body2">
                            
                                    </tbody>
                                </table>
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
                <div class="input-group textarea-translate-group mb-3" id="translate-gro">
                    <textarea type="text"  name="text_input" class="form-control textarea-translate" style="border-radius: 0 0 0 .25rem !important;" wire:model.debounce.300ms="message" placeholder="Translate"></textarea>
                    <textarea type="text" id="textarea-translate" name="text_input_translated" class="form-control textarea-translate" style="border-radius: 0 0 .25rem 0 !important;" placeholder="Translate" disabled>{{$result}}</textarea>
                </div>
            </div>
            <div class="col-2"></div>  
        </div>
        <div class="row">
            <div class="col-2"></div>
            <div class="col-8">
                <button class="btn btn-info btn-lg float-right" id="saveBtn" wire:ignore>Save to dictionary</button>
            </div>
            <div class="col-2"></div>
        </div>
    </div>   
</div>