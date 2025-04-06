import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';
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

    const categories = ['Technology', 'Design', 'Development', 'Web3', 'AI', 'UI/UX', 'Mobile', 'Business'];

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
            <div className="min-h-screen bg-black p-6 text-gray-100">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-8">
                        <h1 className="mb-2 text-3xl font-bold text-white">Create New Blog Post</h1>
                        <p className="text-gray-400">Share your thoughts and ideas with the world</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Title Input */}
                        <div>
                            <label htmlFor="title" className="mb-2 block text-sm font-medium text-gray-300">
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={data.title}
                                onChange={handleInputChange}
                                className="focus:ring-opacity-30 w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter a captivating title..."
                                required
                            />
                            {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
                        </div>

                        {/* Image Upload */}
                        <div>
                            <label htmlFor="image" className="mb-2 block text-sm font-medium text-gray-300">
                                Featured Image
                            </label>
                            <div className="flex w-full items-center justify-center">
                                <label
                                    htmlFor="image-upload"
                                    className="hover:bg-gray-750 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-700 bg-gray-800"
                                >
                                    {previewImage ? (
                                        <div className="h-full w-full overflow-hidden rounded-lg">
                                            <img src={previewImage} alt="Preview" className="h-full w-full object-cover" />
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg
                                                className="mb-3 h-10 w-10 text-gray-400"
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
                            {errors.image && <p className="mt-1 text-sm text-red-500">{errors.image}</p>}
                        </div>

                        {/* Content Textarea */}
                        <div>
                            <label htmlFor="content" className="mb-2 block text-sm font-medium text-gray-300">
                                Content
                            </label>
                            <textarea
                                id="content"
                                name="content"
                                value={data.content}
                                onChange={handleInputChange}
                                rows={8}
                                className="focus:ring-opacity-30 w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                                placeholder="Write your blog post content here..."
                                required
                            ></textarea>
                            {errors.content && <p className="mt-1 text-sm text-red-500">{errors.content}</p>}
                        </div>

                        {/* Author Input */}
                        <div>
                            <label htmlFor="author" className="mb-2 block text-sm font-medium text-gray-300">
                                Author
                            </label>
                            <input
                                type="text"
                                id="author"
                                name="author"
                                value={data.author}
                                onChange={handleInputChange}
                                className="focus:ring-opacity-30 w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                                placeholder="Your name"
                                required
                            />
                            {errors.author && <p className="mt-1 text-sm text-red-500">{errors.author}</p>}
                        </div>

                        {/* Category Select */}
                        <div>
                            <label htmlFor="category" className="mb-2 block text-sm font-medium text-gray-300">
                                Category
                            </label>
                            <select
                                id="category"
                                name="category"
                                value={data.category}
                                onChange={handleInputChange}
                                className="focus:ring-opacity-30 w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                                required
                            >
                                <option value="" disabled>
                                    Select a category
                                </option>
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                            {errors.category && <p className="mt-1 text-sm text-red-500">{errors.category}</p>}
                        </div>

                        {/* Tags Input */}
                        <div>
                            <label htmlFor="tags" className="mb-2 block text-sm font-medium text-gray-300">
                                Tags
                            </label>
                            <input
                                type="text"
                                id="tags"
                                name="tags"
                                value={data.tags}
                                onChange={handleInputChange}
                                className="focus:ring-opacity-30 w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                                placeholder="Separate tags with commas (e.g., react, javascript, webdev)"
                            />
                            {errors.tags && <p className="mt-1 text-sm text-red-500">{errors.tags}</p>}
                        </div>

                        {/* Submit and Cancel Buttons */}
                        <div className="flex space-x-4 pt-4">
                            <button
                                type="submit"
                                disabled={processing}
                                className="focus:ring-opacity-50 flex-1 rounded-lg bg-white px-6 py-3 font-medium text-black transition duration-150 ease-in-out hover:bg-slate-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none disabled:opacity-70 md:w-32 md:flex-none"
                            >
                                {processing ? 'Publishing...' : 'Publish'}
                            </button>
                            <button
                                type="button"
                                disabled={processing}
                                //onClick={handleSaveDraft}
                                className="focus:ring-opacity-50 flex-1 rounded-lg bg-gray-700 px-6 py-3 font-medium text-white transition duration-150 ease-in-out hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 focus:outline-none disabled:opacity-70 md:w-32 md:flex-none"
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
