<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\AvatarCreator::class, 'CreateImage']);

Route::get('/help', function () {
    return view('help');
});
