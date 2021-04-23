<?php

namespace App\Http\Livewire;

use Livewire\Component;
use \Statickidz\GoogleTranslate;

use App\Dictionaries;
use Auth;


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
                            'selectCode2'=> 'selectLangCode2',
                            'saveWord' => 'saveWord'];

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

    public function saveWord($dict){
        if($this->sl=="en" or $this->sl=="pl"){
            if($this->tl=="en" or $this->tl=="pl"){
                if($this->message != ""){
                    if($this->sl=="pl"){
                        Dictionaries::insert([
                            'polish'=> $this->message,
                            'english'=> $this->result,
                            'user'=> Auth::user()->name,
                            'dictionary'=> $dict
                        ]);
                    }else if($this->sl=="en"){
                        Dictionaries::insert([
                            'polish'=> $this->result,
                            'english'=> $this->message,
                            'user'=> Auth::user()->name,
                            'dictionary'=> $dict
                        ]);
                    }
                }
            }
        }
    }

    public function render()
    {   

        if($this->message != "" && !ctype_space($this->message))
            $this->result = $this->trans->translate($this->sl, $this->tl, $this->message);
        else{
            $this->result = " ";
        }
        return view('livewire.translator');
    }
}
