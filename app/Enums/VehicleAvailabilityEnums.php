<?php

namespace App\Enums;

enum VehicleAvailabilityEnums: string
{
    case FULL_DAY = 'FULL_DAY';
    case SPECIFIC_TIMES = 'SPECIFIC_TIMES';
    case START_NOW = 'START_NOW';


    public static function values(): array
    {
        return array_map(fn($case) => $case->value, self::cases());
    }
}
