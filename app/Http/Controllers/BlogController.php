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
        //dd($request->all());

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

        $SelectBlog = Blog::findOrFail($id);
        //dd($blog);
        $blog = [
            'title' => $SelectBlog->title,
            'excerpt' => $SelectBlog->excerpt,
            'content' => $SelectBlog->content,
            'category' => $SelectBlog->category,
            'author' => $SelectBlog->author,
            'status' => $SelectBlog->status,
            'image_url' => $SelectBlog->image ? Storage::url($SelectBlog->image) : null,
            'created_at' => $SelectBlog->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $SelectBlog->updated_at->format('Y-m-d H:i:s'),
        ];
        return Inertia::render('blogs/show', compact('blog'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //dd('check', $id);
        $blog = Blog::find($id);
        //dd($blog);
        return Inertia::render('blogs/update', compact('blog'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $blog = Blog::find($id);
        if ($blog) {
            $data = $request->except('image');

            if ($request->hasFile('image')) {
                // Delete old image if exists
                if ($blog->image) {
                    Storage::disk('public')->delete($blog->image);
                }
                $data['image'] = $request->file('image')->store('blog-images', 'public');
            }
            $blog->update($data);

            return redirect()->route('blogs.index')->with([
                'success' => 'Blog updated successfully',
                'blog' => [
                    ...$blog->toArray(),
                    'image_url' => $blog->image ? Storage::url($blog->image) : null,
                ]
            ]);
        }
        return response()->json(['error' => 'Blog not found'], 404);
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

        return redirect()->route('dashboard')->with('success', 'Blog deleted successfully');
    }
}
