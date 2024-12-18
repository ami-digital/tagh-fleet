<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return Inertia\Inertia::render('Index');
});
Route::get('/orders', function () {
    return Inertia\Inertia::render('Orders/Index');
})->name('orders.index');

Route::get('/orders/view', function () {
    return Inertia\Inertia::render('Orders/View');
});
Route::get('/team-members', function () {
    return Inertia\Inertia::render('TeamMembers/Index');
})->name('team.index');


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

