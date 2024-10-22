<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    use HasFactory;

    protected $fillable = [
        "image_url"
    ];

    public function products()
    {
        return $this->belongsToMany(Product::class, 'product_image_product', 'image_id', 'product_id');
    }
}
