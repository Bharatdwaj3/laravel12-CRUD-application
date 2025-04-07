<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Container\Attributes\Storage;
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
    public function getTableData()
    {
        //get all the data from the blogs table
        $blogs = Blog::all();
        return $blogs;
    }
}
