<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Posts;

class Counter extends Component
{
    public $show = "Please click";
    public $test;
    public function render()
    {
        return view('all-posts');
    }

    public function show($id) {
        $this->show = $id;
    }
}
