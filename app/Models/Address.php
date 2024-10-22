<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $fillable = [
        'unit_number',
        'street_number',
        'address_line1',
        'address_line2',
        'city',
        'postal_code',
        'country',
    ];

    public function user()
    {
        return $this->belongsToMany(User::class, 'user_addresses', 'address_id', 'user_id');
    }
}
