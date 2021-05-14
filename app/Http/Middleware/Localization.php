<?php
namespace App\Http\Middleware;

use Closure;

class Localization
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $local = ($request->hasHeader('Accept-Language')) ? $request->header('Accept-Language') : 'pt_br';
        $local = strtolower(str_replace('-', '_', $local));
        app()->setLocale($local);
        return $next($request);
    }
}
