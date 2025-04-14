<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function index()
    {
        $SelectBlog = Blog::all();
        //dd($blog);
        foreach ($SelectBlog as $blog) {
            $blogs[] = [
                'id' => $blog->id,
                'title' => $blog->title,
                'excerpt' => $blog->excerpt,
                'content' => $blog->content,
                'category' => $blog->category,
                'author' => $blog->author,
                'status' => $blog->status,
                'image_url' => $blog->image ? Storage::url($blog->image) : null,
                'created_at' => $blog->created_at->format('Y-m-d H:i:s'),
                'updated_at' => $blog->updated_at->format('Y-m-d H:i:s'),
            ];
        }
        //dd($blogs);
        return Inertia::render('welcome', [
            'blogs' => $blogs,
        ]);
    }
}
