import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import React, { useState } from 'react';

const Create = () => {
  const [previewImage, setPreviewImage] = useState('');
  
  // Using Inertia's useForm hook for proper form handling
  const { data, setData, post, processing, errors } = useForm({
    title: '',
    content: '',
    author: '',
    category: '',
    tags: '',
    image: null as File | null,
  });

  const categories = [
    'Technology', 'Design', 'Development', 'Web3', 
    'AI', 'UI/UX', 'Mobile', 'Business'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData(name as any, value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setData('image', selectedFile);

      // Create preview URL
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewImage(event.target?.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Using Inertia's post method for form submission
    post(route('blogs.store'));
  };
  
 

  return (
    <AppLayout>
      <Head title="Create Blog Post" />
      <div className="min-h-screen bg-black text-gray-100 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Create New Blog Post</h1>
            <p className="text-gray-400">Share your thoughts and ideas with the world</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Input */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={data.title}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-30 text-white"
                placeholder="Enter a captivating title..."
                required
              />
              {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>

            {/* Image Upload */}
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-300 mb-2">
                Featured Image
              </label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="image-upload"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-800 border-gray-700 hover:bg-gray-750"
                >
                  {previewImage ? (
                    <div className="w-full h-full overflow-hidden rounded-lg">
                      <img
                        src={previewImage}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-10 h-10 mb-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p className="mb-2 text-sm text-gray-400">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-400">SVG, PNG, JPG or GIF (MAX. 2MB)</p>
                    </div>
                  )}
                  <input
                    id="image-upload"
                    type="file"
                    name="image"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
              {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
            </div>

            {/* Content Textarea */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-2">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                value={data.content}
                onChange={handleInputChange}
                rows={8}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-30 text-white"
                placeholder="Write your blog post content here..."
                required
              ></textarea>
              {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
            </div>

            {/* Author Input */}
            <div>
              <label htmlFor="author" className="block text-sm font-medium text-gray-300 mb-2">
                Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={data.author}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-30 text-white"
                placeholder="Your name"
                required
              />
              {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author}</p>}
            </div>

            {/* Category Select */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={data.category}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-30 text-white"
                required
              >
                <option value="" disabled>Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
            </div>

            {/* Tags Input */}
            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-300 mb-2">
                Tags
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={data.tags}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-30 text-white"
                placeholder="Separate tags with commas (e.g., react, javascript, webdev)"
              />
              {errors.tags && <p className="text-red-500 text-sm mt-1">{errors.tags}</p>}
            </div>

            {/* Submit and Cancel Buttons */}
            <div className="flex space-x-4 pt-4">
              <button
                type="submit"
                disabled={processing}
                className="px-6 py-3 bg-white hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 text-black font-medium rounded-lg transition duration-150 ease-in-out flex-1 md:flex-none md:w-32 disabled:opacity-70"
              >
                {processing ? 'Publishing...' : 'Publish'}
              </button>
              <button
                type="button"
                disabled={processing}
                //onClick={handleSaveDraft}
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-white font-medium rounded-lg transition duration-150 ease-in-out flex-1 md:flex-none md:w-32 disabled:opacity-70"
              >
                Save Draft
              </button>
            </div>
          </form>
        </div>
      </div>
    </AppLayout>
  );
};

export default Create;