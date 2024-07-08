<?php

namespace App\Http\Controllers;

use App\Models\usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
class UsuarioController extends Controller
{
 /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $wallet = usuario::all();
        return response()->json($wallet);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {


        usuario::Create([
            "nombreUser"=>$request["nom"],
            "nombre"=> 'null',
            "apellido"=> 'null',
            "correo"=>$request["email"],
            "rol"=>"visitante",
            "contraseña"=>bcrypt($request["password"]),
            "verificador"=>0
        ]);
        return "creado";
    }

    /**
     * Display the specified resource.
     */
    public function show($usuario)
    {
        return usuario::where("correo",$usuario)->first();
    }
    public function log(Request $request)
    {
        $user = Usuario::where('correo', $request['email'])->first();
        
        if ($user && Hash::check($request['password'], $user->contraseña) && $user["verificador"]==1) {

            Session::put("email", $request["email"]);
            Session::put("user", $user["nombreUser"]);
            Session::put("home", "Login successful");
            Session::put("rol", $user["rol"]);
            return Session::all();
        } else {
            return "No existe";
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,  $usuario)
    {
        if ($request->hasAny(['rol'])){
            $user=Usuario::find( $usuario);
            $user["rol"]=$request->rol;
            $user->save();
        }elseif ($request->hasAny(['nombre'])) {
            $user=Usuario::where('correo', $usuario)->first();
            $user->nombreUser=$request["nombreUse"];
            $user->nombre=$request["nombre"];
            $user->apellido=$request["apellido"];
            
            $user->correo=$request["Email"];
            
            if(Hash::check($request["ConA"],$user["contraseña"])){
                $user->contraseña=Hash::make($request["ConN"]);
            }
            $user->save();
            return 'Actualizado';
        }else{
            $user=Usuario::where('correo', $usuario)->first();
            $user["verificador"]=1;
            $user->save();
            return 'existe';
        }

    }
    public function validar($usuario){
        
        $user = Usuario::where('correo', $usuario)->first();
        if ($user) {
            $user->verificador = 1;
            $user->save();
            return redirect()->away('https://redes/inicio');

        } else {
            // Manejar el caso en que no se encuentra el usuario
            // por ejemplo, lanzar una excepción o mostrar un mensaje de error
        }
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy($usuario)
    {
        $usr= usuario::find($usuario);
        if ($usr) {
            $usr->delete();
            // Registro eliminado exitosamente.
        }
        
    }
}
