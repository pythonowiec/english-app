<?php

namespace App\Http\Controllers;

use App\Dictionaries;

use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

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
        $titles = $words->groupBy('dictionary');

        return view("dictionaries.index", [
            "titles" => $titles
        ]);

    }

    public function play(Request $request)
    {
        $user = Auth::user()->name;
        $words = Dictionaries::where('user', $user)->where('dictionary', $request->dictionary)->get();

        return response()->json([
            'words' => $words
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $user = Auth::user()->name;
        $words = Dictionaries::where('user', $user)->orderBy('dictionary')->get();
        $titles = $words->groupBy('dictionary');

        return view('dictionaries/add', [
            "titles" => $titles
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = Auth::user()->name;

        $request->validate([
            'polish' => [
                'required',
            ],
            'english' => 'required',
            'dictionary' => 'required',

        ]);
        
        

        $newWords = new Dictionaries();
        $newWords->polish = $request->polish;
        $newWords->english = $request->english;
        $newWords->dictionary = $request->dictionary;
        $newWords->user = $user;

        $newWords->save();
        
        return redirect('dictionaries\add')->with('status', 'create');
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
    public function destroy(Request $request)
    {
        if($request->id == "all"){
            $user = Auth::user()->name;
            $words = Dictionaries::whereIn('user', $user)->orderBy('dictionary')->get();
            // $titles = $words->groupBy('dictionary');

            foreach ($words as $word) {
                $word->destroy();
            }


        }else{
            $words = Dictionaries::find($request->id);

            $words->delete();
        }
       

        return response()->json([
            "status" => "success"
        ]);
    }
}
