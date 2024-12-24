<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

use App\Settings\GeneralSettings;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingsController extends Controller
{
    // Fetch all settings
    public function getSettings(): \Inertia\Response
    {
        $settings = app(GeneralSettings::class);

       $settings = [
           'country' => $settings->country ?? null,
           'depot_address' => $settings->depot_address,
           'distance_unit' => $settings->distance_unit,
           'time_format' => $settings->time_format,
           'default_stop_duration' => $settings->default_stop_duration,
           'avoid_tolls' => $settings->avoid_tolls,
           'traffic_settings' => $settings->traffic_settings,
           'default_stop_type' => $settings->default_stop_type,
           'max_route_duration' => $settings->max_route_duration,
           'load_balancing' => $settings->load_balancing,
           'maintain_upload_sequence' => $settings->maintain_upload_sequence,
           'merge_orders' => $settings->merge_orders,
       ];


        return Inertia::render('Settings/Index', ['settings' => $settings]);

    }

    // Update settings
    public function updateSettings(Request $request)
    {
        $settings = app(GeneralSettings::class);

        $settings->country = $request->input('country');
        $settings->depot_address = $request->input('depot_address');
        $settings->distance_unit = $request->input('distance_unit');
        $settings->time_format = $request->input('time_format');
        $settings->default_stop_duration = $request->input('default_stop_duration');
        $settings->avoid_tolls = $request->boolean('avoid_tolls');
        $settings->traffic_settings = $request->input('traffic_settings');
        $settings->default_stop_type = $request->boolean('default_stop_type');
        $settings->max_route_duration = $request->boolean('max_route_duration');
        $settings->load_balancing = $request->boolean('load_balancing');
        $settings->maintain_upload_sequence = $request->boolean('maintain_upload_sequence');
        $settings->merge_orders = $request->boolean('merge_orders');

        $settings->save();

        return to_route('settings.index');
    }
}
