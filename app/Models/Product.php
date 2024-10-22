<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        "sku",
        "title",
        "description",
        "price",
        "compare_price",
        "status",
    ];

    //* many to many relationship with categories table
    public function categories()
    {
        return $this->belongsToMany(ProductCategory::class, "product_category_product", "product_id", "category_id");
    }

    public function addToCategoryWithProduct(ProductCategory $category)
    {
        //& Attach the product to the given category
        $this->categories()->attach($category->id);

        //& If the category has a parent, attach the product to the parent category as well
        if ($category->parent) {
            $this->categories()->attach($category->parent->id);
        }
    }

    //* many to many relationship with product_images table
    public function productImages()
    {
        return $this->belongsToMany(ProductImage::class, 'product_image_product', 'product_id', 'image_id');
    }

    //* many to many relationship with tags table
    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'product_tags', 'product_id', 'tag_id');
    }
}
