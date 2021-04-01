<?php

namespace App\Http\Controllers;

use App\Dictionaries;
use Illuminate\Http\Request;
use \Statickidz\GoogleTranslate;



class TranslateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('translate');
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
    public function show(Request $request)
    {

        $source = 'pl';
        $target = 'en';
        $text = $request->text_input;

        $trans = new GoogleTranslate();
        $result = $trans->translate($source, $target, $text);


        return view('translate', [
            'text' => $result
        ]);
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
