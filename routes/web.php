<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use App\Models\usuario;
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

Route::get('/redes2FA/public/', function () {
    return view('welcome');
});
Route::get('/registro/comprovar', function () {
    return view('welcome');
});
Route::get('/seguridad', function () {
    $user = usuario::latest('updated_at')->first();
    
    Mail::to($user["correo"])->send(new App\Mail\seguridad);
    return "mensaje enviado";
})->name('seguridad');
Route::get("/admin",function () {
    
    return view('welcome');
});

Route::get('/{any?}', function () {
    return view('welcome');
});
