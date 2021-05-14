<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreditCardRequest;
use App\Models\CreditCard;
use Illuminate\Http\JsonResponse;

class CreditCardController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(CreditCard::paginate(10));
    }

    public function show(int $id): JsonResponse
    {
        $creditCard = CreditCard::find($id);
        return $creditCard
        ? response()->json(CreditCard::find($id))
        : response()->json(
            ['error' => trans('messages.not_found')],
            JsonResponse::HTTP_NOT_FOUND
        );
    }

    public function store(CreditCardRequest $request): JsonResponse
    {
        return response()->json(
            CreditCard::create($request->all()),
            JsonResponse::HTTP_CREATED
        );
    }
}
