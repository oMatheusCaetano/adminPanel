<?php

namespace App\Http\Requests;

class CreditCardRequest extends GlobalRequest
{
    public function rules(): array
    {
        return [
            'bank_name' => 'string|required',
            'owner_name' => 'string|required',
            'number' => 'string|required|unique:credit_cards',
            'member_since' => 'string|required',
            'valid_thru' => 'string|required',
            'security_code' => 'string|required',
            'flag' => 'string|required',
        ];
    }
}
