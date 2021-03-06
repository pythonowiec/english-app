<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\PostsController;

use App\Http\Controllers\HomeController;

use App\Http\Controllers\DictionariesController;

use App\Http\Controllers\TranslateController;



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

Route::get('/users', 'HomeController@hello')->middleware();

Auth::routes();

Route::get('/home',[HomeController::class, 'index'])->name('home');

Route::get('/dictionaries', [DictionariesController::class, 'index']);
Route::get('/dictionaries/add', [DictionariesController::class, 'create']);
Route::post('/dictionaries/add', [DictionariesController::class, 'store']);
Route::post('/dictionaries/delete', [DictionariesController::class, 'destroy']);

Route::post('/play', [DictionariesController::class, 'play']);

Route::get('/translate', [TranslateController::class, 'index']);

Route::post('/translate', [TranslateController::class, 'index']);

