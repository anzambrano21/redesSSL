<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use App\Models\usuario;
use Illuminate\Http\Request;
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

Route::get('public/', function () {
    return view('welcome');
});
Route::get('/registro/comprovar', function () {
    return view('welcome');
});
Route::post('/seguridad', function (Request $request) {
    
    
    Mail::to($request["correo"])->send(new App\Mail\seguridad($request["correo"]));
    
})->name('seguridad');
Route::get("/admin",function () {
    
    return view('welcome');
});

Route::get('/{any?}', function () {
    return view('welcome');
});
