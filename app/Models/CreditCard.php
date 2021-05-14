<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CreditCard extends Model
{
    use HasFactory;

    protected $fillable = [
        'bank_name',
        'owner_name',
        'number',
        'member_since',
        'valid_thru',
        'security_code',
        'flag',
    ];
}
