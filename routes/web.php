<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\PostsController;

use App\Http\Controllers\HomeController;


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

Route::get('/posts/{post}', [PostsController::class, 'index'])->middleware();

Route::post('/store', [PostsController::class, 'store']);

Route::get('/users', 'HomeController@hello')->middleware();

Auth::routes();

Route::get('/home',[HomeController::class, 'index'])->name('home');

Route::get('/delete', function () {
    return view('delete');
});
