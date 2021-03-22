<?php

namespace App\Http\Controllers;

use App\Posts;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Auth;

class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    // public function index($post)
    // {   
    //         if ($post == 'all'){
    //             $test = Posts::where('author', 'test')->get();
    //             return view('all-posts', [
    //                 'all' => Posts::where('author', 'test')->get()
    //             ]);
    //         }
    //         if ($post == 'add'){
    //             return view("create");
    
    //         }else{
    //             return view('post', [
    //                 'post' => Posts::where('title', $post)->firstOrFail()
    //             ]);
    //         }

        
    // }  
    public function index()
    {
        try {
            $data = Posts::where('author', 'test')->get();
            return response()->json([
                "data" => $data,
                "success" => "true",
                "code" => "200"
            ]);
        }catch (Exception $e){
            return response()->json([
                "success" => "false",
                "code" => "404"
            ]);
        }
        
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
        try {
            $validated = $request->validate([
                'title' => 'required|unique:posts',
                'content' => 'required',
            ]);
            $row = Posts::insert([
                    'title' => $request->title,
                    'content' => $request->content,
                    'author' => $request->author
            ]);
            return response()->json([
                "success" => "true",
                "code" => "200"
            ]);
        } catch (Exception $e) {
            return response()->json([
                "success" => "false",
                "code" => "404"
            ]);
        }
        

        
        
    }

    public function show_all($post){
        if ($post == 'all'){
            $test = Posts::where('author', 'test')->get();
            return view('all-posts', [
                'all' => Posts::where('author', 'test')->get()
            ]);
        }
        if ($post == 'add'){
            return view("create");

        }else{
            return view('post', [
                'post' => Posts::where('title', $post)->firstOrFail()
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Posts  $posts
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if($row = Posts::find($id)){
            $data = [
                'data' => $row,
                'success' => "true",
                'code' => "200"          
            ];
        }else{
            $data = [
                'success' => "false",
                'code' => "404"          
            ];
        }
        
        return response()->json($data);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Posts  $posts
     * @return \Illuminate\Http\Response
     */
    public function edit(Posts $posts)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Posts  $posts
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Posts $posts)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Posts  $posts
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {   
        Posts::where('id', $id)->delete();
        return response()->json([
            "success" => "true",
            "code" => "200"
        ]);
    }
}
