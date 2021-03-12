<?php

use Illuminate\Support\Facades\Route;

use App\Htpp\Controllers\PostsController;

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

Route::Get('/posts/{post}', [PostsController::class, 'index']);

Route::get('/users', 'HomeController@hello')->middleware();

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
