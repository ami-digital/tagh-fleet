<?php

namespace App\Http\Requests;

use App\Enums\VehicleAvailabilityEnums;
use App\Enums\VehicleLocationsEnums;
use App\Models\Vehicle;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreVehicleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'driver_id' => 'nullable|exists:team_members,id',
            'availability' =>['required' ,'string' , Rule::in(VehicleAvailabilityEnums::values())],
            'include_driver_break' => 'boolean',
            'start_location' =>['required' , Rule::in(VehicleLocationsEnums::values())],
            'end_location' =>['required' , Rule::in(VehicleLocationsEnums::values())],
            'slot_start' => ['nullable', 'date_format:H:i'],
            'slot_end' => ['nullable', 'date_format:H:i'],
            'break_start' => ['nullable', 'date_format:H:i'],
            'break_end' => ['nullable', 'date_format:H:i'],
            'start_location_address' => ['nullable', 'string'],
            'end_location_address' => ['nullable', 'string'],
            'break_length' => ['nullable', 'integer' , 'min:0'],
            'skills' => 'nullable|array',
            'max_number_of_stops' => 'required|integer|min:1',
            'capacity' => 'required|integer|min:1',
        ];
    }
}
