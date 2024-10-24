<?php

use App\Http\Controllers\ProfileController;
use App\Http\Middleware\Admin\AdminAuthMiddleware;
use Illuminate\Auth\Middleware\Authenticate;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// * admin dashboard routes
Route::middleware(AdminAuthMiddleware::class)->prefix('admin')->group(function () {
    Route::inertia('dashboard', 'Admin/Dashboard')->name('admin.dashboard');
    Route::inertia('orders', 'Admin/Orders')->name('admin.orders');
    Route::inertia('products', 'Admin/Products')->name('admin.products');
    Route::inertia('products/add', 'Admin/AddProduct')->name('admin.add-product');
    Route::inertia('products/categories', 'Admin/Categories')->name('admin.categories');
    Route::inertia('products/categories/add', 'Admin/AddCategory')->name('admin.add-category');
    Route::inertia('customers', 'Admin/Customers')->name('admin.customers');
    Route::inertia('content', 'Admin/Content')->name('admin.content');
    Route::inertia('analytics', 'Admin/Analytics')->name('admin.analytics');
    Route::inertia('discounts', 'Admin/Discounts')->name('admin.discounts');
    Route::inertia('settings', 'Admin/Settings')->name('admin.settings');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
