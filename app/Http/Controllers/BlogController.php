<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        return Inertia::render('blogs/index', [
            'blogs' => Blog::with('user')->latest()->paginate(10),
        ]); // return the data to the frontend
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //dd('create');
        // return the create view
        return Inertia::render('blogs/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request);
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'category' => 'required|string|max:255',
            'tags' => 'nullable|array',
            'image' => 'nullable|image|max:2048',

        ]);

        $blog = Blog::create($request->all());
        if ($blog) {
            return response()->json($blog, 201);
        } else {
            return response()->json(['message' => 'Blog creation failed'], 500);
        };
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Blog::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blog $blog)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $blog = Blog::findOrFail($id);
        $blog->update($request->all());
        return response()->json($blog, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Blog::destroy($id);
        return response()->json(null, 204);
    }
}
