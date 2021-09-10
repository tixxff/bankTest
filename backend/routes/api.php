<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WalletController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('wallets', [WalletController::class,'getWallet']);

//get by id
Route::get('wallets/{id}', [WalletController::class,'getWalletById']);

//Add Wallet
Route::post('addWallet', [WalletController::class,'addWallet']);

//Update Wallet
Route::put('updateWallet/{id}', [WalletController::class,'updateWallet']);

//Delete Wallet
Route::delete('deleteWallet/{id}', [WalletController::class,'deleteWallet']);

