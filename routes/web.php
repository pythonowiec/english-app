<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/homepage', function(){
    return view('homepage');
})->middleware();

Route::get('/posts/{post}', function($post){
    $posts =[
        'first-post' => 'Hello, this is my first post',
        'second-post' => 'Hello, this is my second post'
    ];

    if(!array_key_exists($post, $posts)){
        abort(404);
    }
    return view('post', [
        'post' => $posts[$post]
    ]);
});

Route::get('/users', 'HomeController@hello')->middleware();

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
