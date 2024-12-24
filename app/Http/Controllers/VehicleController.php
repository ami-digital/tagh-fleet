<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVehicleRequest;
use App\Http\Resources\VehicleResource;
use App\Models\TeamMember;
use App\Models\Vehicle;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class VehicleController extends Controller
{
    public function index(): \Inertia\Response
    {
        $vehicles = Vehicle::with('driver:id,name')->get();
//        $data = VehicleResource::collection($vehicles) ;
        return Inertia::render('Vehicles/Index', ['vehicles' => $vehicles]);


    }

    public function create(): JsonResponse
    {

        $skills = [
            ['label' => 'Ways' , 'value' => 'WAYS'],
            ['label' => 'Google Map' , 'value' => 'GOOGLE'],
            ['label' => 'Apple' , 'value' => 'APPLE'],
        ] ;
        $drivers = TeamMember::query()->get();
        return new JsonResponse([
            'status' => 'success',
            'options' => ['skills' => $skills , 'drivers' => $drivers]
        ], 200);
    }

    public function store(StoreVehicleRequest $request)
    {
        Vehicle::query()->create($request->validated());
        return to_route('vehicles.index');
    }

    public function show(Vehicle $vehicle)
    {
        $vehicle->load('driver');
        return new VehicleResource($vehicle);
    }

    public function update(StoreVehicleRequest $request, Vehicle $vehicle)
    {
        $vehicle->update($request->validated());
        return new VehicleResource($vehicle);
    }

    public function destroy(Vehicle $vehicle): \Illuminate\Http\RedirectResponse
    {
        $vehicle->delete();
        return to_route('vehicles.index');
    }
}
