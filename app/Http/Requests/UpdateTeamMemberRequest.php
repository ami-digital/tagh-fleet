<?php

namespace App\Http\Requests;

use App\Enums\SatNavEnums;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateTeamMemberRequest extends FormRequest
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
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255',Rule::unique('users', 'email')->ignore($this?->team_member),],
            'phone' => ['nullable', 'string', 'regex:/^\+\d{1,14}$/'],
            'roles' => ['required', 'array'],
            'roles.*' => ['exists:roles,id'],
            'sat_nav' => ['required' , Rule::in(SatNavEnums::values())],
        ];
    }


}
