import { useFormattedDate } from '@/hooks/use-formated-date';
import { ReadingTimeDisplay } from '@/hooks/use-readtime';
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export default function BlogCard({ blog }: any) {
    const formattedDate = useFormattedDate(blog.updated_at);

    return (
        <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg dark:bg-[#121212]">
            <div className="relative h-48 overflow-hidden">
                <img src={blog.image_url} alt={blog.title} className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
                <div className="absolute top-3 left-3">
                    <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {blog.category}
                    </span>
                </div>
            </div>
            <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 line-clamp-2 text-xl font-bold text-[#1b1b18] dark:text-[#EDEDEC]">{blog.title}</h3>
                <p className="mb-4 line-clamp-2 flex-1 text-sm text-gray-600 dark:text-gray-300">{blog.excerpt}</p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-800">
                    <div className="text-sm text-gray-500 dark:text-gray-400">{formattedDate}</div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span>
                            <ReadingTimeDisplay content={blog.content} />
                        </span>
                    </div>
                </div>
                <Link
                    href={`/blogs/${blog.id}`}
                    className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                    Read more
                    <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
            </div>
        </div>
    );
}
