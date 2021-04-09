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

    //lanuguages codes {source} | {target}
    public $source;
    public $target;

    public function __construct(){

        $this->trans = new GoogleTranslate();

    }

    public function render()
    {
            if ((!$this->message == "") and (!$this->source == "") and (!$this->target == "")){
                $this->result = $this->trans->translate($this->source, $this->target, $this->message);
            }else{
                $this->message="";
            }

        return view('livewire.translator');
    }

}
