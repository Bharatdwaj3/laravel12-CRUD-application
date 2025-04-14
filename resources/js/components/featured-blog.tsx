import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export default function FeaturedBlog({ blog }: any) {
    const formattedDate = new Date(blog.published_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    return (
        <div className="relative mb-12 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="p-8 lg:p-12">
                <span className="bg-opacity-30 mb-4 inline-block rounded-full bg-blue-500 px-3 py-1 text-sm font-medium">Featured Post</span>
                <h2 className="mb-4 text-3xl font-bold lg:text-4xl">{blog.title}</h2>
                <p className="mb-6 text-lg opacity-90">{blog.excerpt}</p>
                <div className="mb-6 flex items-center">
                    <div className="mr-4 h-10 w-10 overflow-hidden rounded-full bg-blue-400 text-center leading-10">{blog.author.charAt(0)}</div>
                    <div>
                        <div className="font-medium">{blog.author}</div>
                        <div className="text-sm opacity-80">{formattedDate}</div>
                    </div>
                </div>
                <Link
                    href={`/blog/${blog.id}`}
                    className="hover:bg-opacity-90 inline-flex items-center rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-blue-600"
                >
                    Read article
                    <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
            </div>
            <div className="hidden lg:block">
                <div className="relative h-full w-full">
                    <img src={blog.image_url} alt={blog.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-600 opacity-30"></div>
                </div>
            </div>
        </div>
    );
}
