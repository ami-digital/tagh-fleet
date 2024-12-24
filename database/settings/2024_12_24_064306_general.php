<?php

use Spatie\LaravelSettings\Migrations\SettingsMigration;

return new class extends SettingsMigration
{
    public function up(): void
    {
        $this->migrator->add('general.country', null);
        $this->migrator->add('general.depot_address', null);
        $this->migrator->add('general.distance_unit', 'km');
        $this->migrator->add('general.time_format', '24h');
        $this->migrator->add('general.default_stop_duration', 0);
        $this->migrator->add('general.avoid_tolls', false);
        $this->migrator->add('general.traffic_settings', 'standard');
        $this->migrator->add('general.default_stop_type', false);
        $this->migrator->add('general.max_route_duration', false);
        $this->migrator->add('general.load_balancing', false);
        $this->migrator->add('general.maintain_upload_sequence', false);
        $this->migrator->add('general.merge_orders', false);
    }
};
