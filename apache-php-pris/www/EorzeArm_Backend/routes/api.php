<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::post('/registrar', [UserController::class , 'registrar']);
Route::post('/login', [UserController::class , 'login']);


Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/user', function (Request $request) {
        return $request->user()->load('items');
    });

    Route::get('/server-status', [UserController::class , 'serverStatus']);

    Route::post('/upload', [UserController::class , 'upload']);
    Route::delete('/delete/{id}', [UserController::class , 'delete']);
    Route::post('/logout', [UserController::class , 'logout']);
});
