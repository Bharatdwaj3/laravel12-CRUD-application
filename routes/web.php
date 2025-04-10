<?php

use Illuminate\Foundation\Auth\EmailVerificationRequest;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('blogs', BlogController::class);
});

Route::middleware('auth')->group(function () {
    Route::resource('dashboard', DashboardController::class);
});

Route::middleware(['auth', 'verified'])->get('/dashboard', function () {
    return app(DashboardController::class)->index();
})->name('dashboard');

Route::get('/test', function () {
    return Inertia::render('test');
})->name('test');



require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
