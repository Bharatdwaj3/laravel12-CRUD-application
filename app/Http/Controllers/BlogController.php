<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogPosts = Blog::latest()->get()->map(function ($blog) {
            return [
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
        });

        return Inertia::render('blogs/index', compact('blogPosts'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('blogs/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'excerpt' => 'required|string|max:255',
            'content' => 'required|string',
            'category' => 'required|string|max:255',
            'image' => 'nullable|image|max:2048',
        ]);

        $data = $request->except('image');
        $data['author'] = Auth::user()->name;

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('blog-images', 'public');
        }

        $blog = Blog::create($data);

        return redirect()->route('blogs.index')->with([
            'success' => 'Blog created successfully',
            'blog' => [
                ...$blog->toArray(),
                'image_url' => $blog->image ? Storage::url($blog->image) : null,
            ]
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $blog = Blog::findOrFail($id);

        return Inertia::render('blogs/show', [
            'blogPost' => [
                ...$blog->toArray(),
                'image_url' => $blog->image ? Storage::url($blog->image) : null,
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $blog = Blog::findOrFail($id);

        $request->validate([
            'title' => 'sometimes|string|max:255',
            'excerpt' => 'sometimes|string|max:255',
            'content' => 'sometimes|string',
            'category' => 'sometimes|string|max:255',
            'image' => 'sometimes|image|max:2048',
        ]);

        $data = $request->except('image');

        if ($request->hasFile('image')) {
            // Delete old image if exists
            if ($blog->image) {
                Storage::disk('public')->delete($blog->image);
            }
            $data['image'] = $request->file('image')->store('blog-images', 'public');
        }

        $blog->update($data);

        return response()->json([
            ...$blog->toArray(),
            'image_url' => $blog->image ? Storage::url($blog->image) : null,
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $blog = Blog::findOrFail($id);

        // Delete associated image
        if ($blog->image) {
            Storage::disk('public')->delete($blog->image);
        }

        $blog->delete();

        return redirect()->route('dashboard.index')->with('success', 'Blog deleted successfully');
    }
}
