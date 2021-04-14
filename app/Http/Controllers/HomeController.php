<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }
    public function hello()
    {
        return view('users')->with("name", "Janusz");
    }
    
    public function show() {
        return view('ajax');
    }
    public function store(Request $request) {
        
        return response()->json([
            "status" => $request->name
        ]);
    }
}
