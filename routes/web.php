<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return Inertia\Inertia::render('Index');
});
Route::get('/orders', function () {
    return Inertia\Inertia::render('Orders/Index');
});


Route::get('/vehicles', function () {
    return Inertia\Inertia::render('Vehicles/Index');
});
