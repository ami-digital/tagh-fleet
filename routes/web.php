<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return Inertia\Inertia::render('Index');
});
Route::get('/orders', function () {
    return Inertia\Inertia::render('Orders/Index');
});
Route::get('/team-members', function () {
    return Inertia\Inertia::render('TeamMembers/Index');
});


Route::get('/vehicles', function () {
    return Inertia\Inertia::render('Vehicles/Index');
});


Route::get('/customers', function () {
    return Inertia\Inertia::render('Customers/Index');
});


Route::get('/routes', function () {
    return Inertia\Inertia::render('Routes/Index');
});
