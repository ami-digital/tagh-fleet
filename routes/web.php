<?php

use App\Http\Controllers\TeamMemberController;
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



Route::resource('team-members', TeamMemberController::class);


Route::get('/vehicles', function () {
    return Inertia\Inertia::render('Vehicles/Index');
})->name('vehicles.index');


Route::get('/zones', function () {
    return Inertia\Inertia::render('Zones/Index');
});


Route::get('/routes', function () {
    return Inertia\Inertia::render('Routes/Index');
})->name('routes.index');

Route::get('/plans', function () {
    return Inertia\Inertia::render('Plans/Index');
})->name('plans.index');

Route::get('/settings', function () {
    return Inertia\Inertia::render('Settings/Index');
})->name('settings.index');

