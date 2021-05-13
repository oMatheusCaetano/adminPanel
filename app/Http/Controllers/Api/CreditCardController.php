<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreditCardRequest;
use App\Models\CreditCard;
use Illuminate\Http\JsonResponse;

class CreditCardController extends Controller
{
    public function store(CreditCardRequest $request): JsonResponse
    {
        dd($request);
        return response()->json(CreditCard::make($request->all()));
    }
}
