<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BlogCategories extends Model
{
    protected $table = 'blog_categories';

    protected $fillable = [
        'name',
        'status',
    ];

    public function blogs()
    {
        return $this->hasMany(Blog::class, 'category', 'id');
    }
    public function getStatusAttribute($value)
    {
        return $value ? 'active' : 'inactive';
    }
}
