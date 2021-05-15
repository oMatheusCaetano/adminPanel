<?php

use Illuminate\Support\Facades\Route;

$globalMiddlewares = ['localization'];

Route::group(['middleware' => $globalMiddlewares], function (): void {
    Route::apiResource('credit-card', 'Api\CreditCardController');
});

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
