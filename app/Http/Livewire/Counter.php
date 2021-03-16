<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Posts;

class Counter extends Component
{
    public $post_id;
    public function render()
    {
        return view('livewire.counter');
    }

    public function delete() {
        Posts::where('id', $this->post_id)->delete();
        redirect('/posts/all');
    }
}
