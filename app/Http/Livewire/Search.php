<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Posts;

class Search extends Component
{
    public $text;

    public function render()
    {   
        $searchRes = Posts::where('title', 'like', "$this->text")->get();
        return view('livewire.search', [
            'searchRes' => $searchRes,
        ]);
    }

}
