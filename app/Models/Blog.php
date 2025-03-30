<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $fillable = [
        'title',
        'content',
        'author',
        'category',
        'tags',
        'image',
        'status'
    ];

    protected $casts = [
        'tags' => 'array', // Assuming tags are stored as a JSON array
    ];
}
