<div class="input-group textarea-translate-group mb-3">
    <input type="text" wire:model="source" />
    <input type="text" wire:model="target" />
    <textarea type="text"  name="text_input" class="form-control textarea-translate" wire:model.debounce.300ms="message" placeholder="Translate"></textarea>
    <textarea type="text"  name="text_input_translated" class="form-control textarea-translate" placeholder="Translate" disabled>{{$result ?? ""}}</textarea>

</div>



