<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Vehicle extends Model
{
    protected $guarded = [] ;
    protected $casts = [
        'include_driver_break' => 'boolean',
        'skills' => 'array',
    ];

    public function driver(): BelongsTo
    {
        return $this->belongsTo(TeamMember::class, 'driver_id');
    }
}
