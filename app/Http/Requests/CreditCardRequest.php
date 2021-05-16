<?php

namespace App\Http\Requests;

class CreditCardRequest extends GlobalRequest
{
    public function rules(): array
    {
        return [
            'bank_name' => 'string|required',
            'owner_name' => 'string|required',
            'number' => 'string|required|unique:credit_cards,number,' . $this->id,
            'member_since' => 'string|required',
            'valid_thru' => 'string|required',
            'security_code' => 'required',
            'flag' => 'string|required',
            'color' => 'string|required',
            'text_color' => 'string|required',
        ];
    }
}
