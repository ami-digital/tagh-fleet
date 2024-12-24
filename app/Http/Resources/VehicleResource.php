<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VehicleResource extends JsonResource
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
            'name' => $this->name,
            'driver' => $this->driver ? $this->driver->name : null,
            'availability' => $this->availability,
            'include_driver_break' => $this->include_driver_break,
            'start_location' => $this->start_location,
            'end_location' => $this->end_location,
            'skills' => $this->skills,
            'max_number_of_stops' => $this->max_number_of_stops,
            'capacity' => $this->capacity,
        ];
    }
}
