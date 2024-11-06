<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\Product;
use App\Models\ProductCategory;
use App\Models\ProductImage;
use App\Models\Tag;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */

    public function run(): void
    {
        // Disable foreign key checks
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');

        // Truncate tables in the correct order to avoid foreign key constraint issues
        DB::table('product_image_product')->truncate();
        DB::table('product_tags')->truncate();
        DB::table('product_category_product')->truncate();
        DB::table('products')->truncate();
        DB::table('product_images')->truncate();
        DB::table('product_categories')->truncate();
        DB::table('tags')->truncate();
        DB::table('users')->truncate();
        DB::table('admins')->truncate();

        // Re-enable foreign key checks
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        // Seed data
        User::factory(10)->create();

        if (!User::where('email', 'test@example.com')->exists()) {
            User::factory()->create([
                'name' => 'Test User',
                'email' => 'test@example.com',
            ]);
        }

        if (!Admin::where('email', 'miskathasan979@gmail.com')->exists()) {
            Admin::factory()->create([
                'name' => 'Miskat Hasan',
                'email' => 'miskathasan979@gmail.com',
                'password' => 'i am the admin of foodo',
                'role' => 'admin',
            ]);
        }

        // Seed Categories
        $categories = ProductCategory::factory()->count(10)->create();

        // Seed Tags
        $tags = Tag::factory()->count(20)->create();

        // Seed Products and Attach Relationships
        Product::factory()->count(20)->create()->each(function ($product) use ($categories, $tags) {
            // Attach random categories
            $product->categories()->attach(
                $categories->random(rand(1, 2))->pluck('id')->toArray()
            );

            // Attach random tags
            $product->tags()->attach(
                $tags->random(rand(2, 4))->pluck('id')->toArray()
            );

            // Attach random images
            $images = ProductImage::factory()->count(2)->create();
            $product->productImages()->attach(
                $images->pluck('id')->toArray()
            );
        });
    }
}
