<?php

namespace App\Settings;

use Spatie\LaravelSettings\Settings;

class GeneralSettings extends Settings
{
    public string|null $country;
    public string|null $depot_address;
    public string|null $distance_unit;
    public string|null $time_format;
    public int|null $default_stop_duration;
    public bool $avoid_tolls;
    public string $traffic_settings;
    public bool $default_stop_type;
    public bool $max_route_duration;
    public bool $load_balancing;
    public bool $maintain_upload_sequence;
    public bool $merge_orders;

    public static function group(): string
    {
        return 'general';
    }
}
