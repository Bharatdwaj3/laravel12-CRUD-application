<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = [
        'content',
        'comment_by',
        'blog_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'comment_by');
    }

    public function blog()
    {
        return $this->belongsTo(Blog::class, 'blog_id');
    }
}
