<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class usuario extends Model
{
    protected $fillable = ['nombre','nombreUser','apellido', 'correo', 'contraseña','verificador','rol'];
    protected $table = 'usuarios';
    use HasFactory;
}
