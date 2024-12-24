<?php

namespace App\Enums;

enum SatNavEnums: string
{
    case WAYS = 'WAYS';
    case GOOGLE = 'GOOGLE';
    case APPLE = 'APPLE';


    public static function values(): array
    {
        return array_map(fn($case) => $case->value, self::cases());
    }
}
