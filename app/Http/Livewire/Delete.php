<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Posts;

class Delete extends Component
{
    public $post_id;

    public function render()
    {
        return view('livewire.delete');
    }

    public function delete() {
        Posts::where('id', $this->post_id)->delete();
        redirect('/posts/all');
    }
}
