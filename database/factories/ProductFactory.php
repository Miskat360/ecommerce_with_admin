<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    protected $model = Product::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'sku' => $this->faker->unique()->bothify('SKU-####'),
            'title' => $this->faker->sentence(5),
            'description' => $this->faker->paragraph(15),
            'price' => $this->faker->randomFloat(2, 10, 100),
            'compare_price' => $this->faker->randomFloat(2, 10, 100),
            'status' => $this->faker->randomElement(['active', 'draft', 'archived'])
        ];
    }
}
