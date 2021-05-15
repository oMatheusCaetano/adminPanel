<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Localization
{
    public function handle(Request $request, Closure $next): mixed
    {
        $local = $request->hasHeader('Accept-Language')
        ? $request->header('Accept-Language')
        : 'pt_br';
        $local = strtolower(str_replace('-', '_', $local));
        app()->setLocale($local);
        return $next($request);
    }
}
