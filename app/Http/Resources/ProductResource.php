<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->title,
            'description' => $this->description,
            'price' => $this->price,
            'status' => $this->status,
            'images' => ProductImageResource::collection($this->whenLoaded('productImages')),
            'categories' => ProductCategoryResource::collection($this->whenLoaded('categories')),
            'tags' => ProductTagResource::collection($this->whenLoaded('tags')),
            // 'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            // 'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
