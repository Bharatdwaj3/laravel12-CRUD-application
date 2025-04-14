import BlogCard from '@/components/blog-card-updated';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Blogs',
        href: '/blogs',
    },
];

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    image_url: string;
}

export default function Blogs({ blogPosts }: { blogPosts: BlogPost[] }) {
    console.log(blogPosts);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Blogs" />
            <div className="mx-auto max-w-full">
                <div className="m-4 flex items-center justify-between">
                    <Link href={route('blogs.create')} className="rounded bg-white px-4 py-2 text-black hover:bg-slate-200">
                        Create New
                    </Link>
                </div>
                <div className="m-4 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {blogPosts.map((post, id) => (
                        <Link href={`/blogs/${post.id}`} key={id}>
                            <BlogCard blog={post} />
                        </Link>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
