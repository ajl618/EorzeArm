<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\ItemModel;

class UserController extends Controller
{

    /**
     * login
     *
     * @param Request $request
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string'
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Credenciales incorrectas'
            ], 401);
        }

        $token = $user->createToken('token')->plainTextToken;

        return response()->json([
            'token' => $token
        ], 200);
    }

    /**
     * logout
     *
     * @param Request $request
     */
    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json([
            'message' => 'logout'
        ], 200);
    }

    /**
     * registrar
     *
     * @param Request $request
     */
    public function registrar(Request $request)
    {
        $request->validate([
            'username' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string'
        ]);

        $user = new User([
            'name' => $request->username,
            'email' => $request->email,
            'clase' => $request->clase,
            'password' => bcrypt($request->password)
        ]);

        $user->save();

        return response()->json([
            'message' => 'Usuario creado exitosamente'
        ], 200);
    }

    /**
     * upload
     *
     * Agregar cada item por usuario
     * @param Request $request
     */
    public function upload(Request $request)
    {
        $request->validate([
            'data' => 'required',
            'clase' => 'required',
       ]);

       $body = $request->all();
       $data = $body['data'];
       $clase = $body['clase']['_value'];

       // Determina la imagen o ícono a guardar
       $image = $request->input('image') ?? $request->input('icon');

       if(array_key_exists('image', $data)){
           $image = $data['image'];
       }else if(array_key_exists('icon', $data)){
           $image = $data['icon'];
       }

       // Crear un nuevo item
       $item = new ItemModel([
            'name' => $data['name'],
            'item_id' => $data['id'],
            'image_url' => $image,
            'clase' => $clase
        ]);

        // Obtener el usuario autenticado desde el token
        $user = $request->user();

        // Asociar el item con el usuario autenticado
        $user->items()->save($item);

        // Respuesta JSON
        return response()->json([
            'message' => 'Item agregado'
        ], 200);
    }

    /**
     * delete
     *
     * Eliminar un item por id
     * @param int $id
     */
    public function delete($id)
    {
        $item = ItemModel::find($id);

        if (!$item) {
            return response()->json([
                'message' => 'Item no encontrado'
            ], 404);
        }

        $item->delete();

        return response()->json([
            'message' => 'Item eliminado'
        ], 200);
    }

    /**
     * serverStatus
     *
     * Obtener el estado del servidor
     */
    public function serverStatus(){
        $status = \DB::table('server_status_models')->get();

        return response()->json([
            'status' => $status
        ], 200);
    }

}

