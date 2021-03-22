<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomePageController extends Controller
{
    //
    public function index(){
        
        $data = [
            "name" => "Alibaba"
        ];
        return response()
            ->view("homepage", $data, 200)
            ->header('Content-Type', 'text/html');
        // ->view("homepage");
    }
    // public function store(Request $request){
    //     $text = $request->text;
    //     return response('Hello World', 200)
    //     ->header('Content-Type', 'text/plain');
    // }
}
