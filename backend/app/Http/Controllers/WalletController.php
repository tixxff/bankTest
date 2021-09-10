<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Wallet;

class WalletController extends Controller
{
    public function getWallet() {
        return response()->json(Wallet::all(), 200);
    }

    public function getWalletById($id) {
        $wallet = Wallet::find($id);
        if (is_null($wallet)) {
            return response()->json(['message' => 'Wallet Not found'], 404);
        }
        return response()->json($wallet::find($id));
    }

    public function addWallet(Request $request) {
        $wallet = Wallet::create($request->all());
        return response($wallet, 201);
    }

    public function updateWallet(Request $request, $id) {
        $wallet = Wallet::find($id);
        if(is_null($wallet)){
            return response()->json(['message' => 'Wallet Not found'], 404);
        } 
        $wallet->update($request->all());
        return response($wallet, 200);
    }


    public function deleteWallet(Request $request, $id) {
        $wallet = Wallet::find($id);
        if(is_null($wallet)){
            return response()->json(['message' => 'Wallet Not found'], 404);
        } 
        $wallet->delete();
        return response()->json(null,204);
    }

}
