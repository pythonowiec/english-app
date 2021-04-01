<?php

namespace App\Http\Controllers;

use App\Dictionaries;

use Illuminate\Http\Request;
use Auth;

class DictionariesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user()->name;
        $words = Dictionaries::where('user', $user)->orderBy('dictionary')->get();
        return $words;

        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Dictionaries  $dictionaries
     * @return \Illuminate\Http\Response
     */
    public function show(Dictionaries $dictionaries)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Dictionaries  $dictionaries
     * @return \Illuminate\Http\Response
     */
    public function edit(Dictionaries $dictionaries)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Dictionaries  $dictionaries
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Dictionaries $dictionaries)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Dictionaries  $dictionaries
     * @return \Illuminate\Http\Response
     */
    public function destroy(Dictionaries $dictionaries)
    {
        //
    }
}
