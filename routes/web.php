<?php

use App\Http\Controllers\SettingsController;
use App\Http\Controllers\TeamMemberController;
use App\Http\Controllers\VehicleController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return Inertia\Inertia::render('Index');
});

Route::get('/dashboard', function () {
    return Inertia\Inertia::render('LiveDashboard/Index');
})->name('dashboard.index');

Route::get('/orders', function () {
    return Inertia\Inertia::render('Orders/Index');
})->name('orders.index');

Route::get('/orders/view', function () {
    return Inertia\Inertia::render('Orders/View');
});



Route::prefix('team')
    ->name('team.') ->group(function () {

        Route::resource('members', TeamMemberController::class);
    });




Route::prefix('vehicles')->group(function () {
        Route::resource('vehicles', VehicleController::class);
    });



Route::get('/zones', function () {
    return Inertia\Inertia::render('Zones/Index');
});


Route::get('/routes', function () {
    return Inertia\Inertia::render('Routes/Index');
})->name('routes.index');

Route::get('/plans', function () {
    return Inertia\Inertia::render('Plans/Index');
})->name('plans.index');



Route::prefix('settings')
    ->name('settings.') ->group(function () {

        Route::get('/', [SettingsController::class, 'getSettings'])->name('index');
        Route::post('/update', [SettingsController::class, 'updateSettings'])->name('update');
    });




