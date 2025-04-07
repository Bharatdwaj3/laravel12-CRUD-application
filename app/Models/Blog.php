<?php

namespace App\Models;

use App\Models\User;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $fillable = [
        'title',
        'excerpt',
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
    public function user()
    {
        return $this->belongsTo(User::class, 'author', 'name');
    }
}
