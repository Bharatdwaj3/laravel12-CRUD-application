<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('blogs', BlogController::class);
    Route::resource('dashboard', DashboardController::class);
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
