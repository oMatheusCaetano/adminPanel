<?php

use Illuminate\Support\Facades\Route;

Route::apiResource('credit-card', 'Api\CreditCardController');

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
