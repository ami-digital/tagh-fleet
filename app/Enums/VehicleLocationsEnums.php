<?php

namespace App\Enums;

enum VehicleLocationsEnums: string
{
    case DEPOT = 'DEPOT';
    case OTHER = 'OTHER';
    case APP_LOCATION = 'APP_LOCATION';


    public static function values(): array
    {
        return array_map(fn($case) => $case->value, self::cases());
    }
}
