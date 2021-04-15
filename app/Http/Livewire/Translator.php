<?php

namespace App\Http\Livewire;

use Livewire\Component;
use \Statickidz\GoogleTranslate;



class Translator extends Component
{

    //text  to translate
    public $message;
    //translation result
    public $result;
    //GoogleTransalte class instance
    private $trans;

    // //lanuguages codes {source} | {target}
    public $sl = "en";
    public $tl = "pl";

    protected $listeners = ['selectCode1' => 'selectLangCode1',
                            'selectCode2'=> 'selectLangCode2'];

    public function __construct(){

        $this->trans = new GoogleTranslate();
    }

    public function selectLangCode1($code){
        if(!$code == "")
            $this->sl = $code;
    }

    public function selectLangCode2($code){
        if(!$code == "")
            $this->tl = $code;
    }

    public function render()
    {   
        if($this->message != "")
            $this->result = $this->trans->translate($this->sl, $this->tl, $this->message);
        else{
            $this->result = " ";
        }
        return view('livewire.translator');
    }
}
