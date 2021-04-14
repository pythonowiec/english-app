<?php

namespace App\Http\Livewire;

use Livewire\Component;

class Buttons extends Component
{

    public $sl;
    protected $listeners = ['selectCode' => 'selectLangCode'];

    public function selectLangCode($code){
        $this->sl = $code;
    }

    public function render()
    {
        return view('livewire.buttons');
    }
}
