import { Card, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
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
                            <Card className="transition-all duration-300 hover:translate-y-1 hover:shadow-2xl">
                                <div className="relative h-48 w-full overflow-hidden rounded-xl border transition-all duration-300 hover:translate-y-1 hover:shadow-2xl">
                                    <img
                                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                        src={post.image_url}
                                        alt=""
                                    />
                                </div>
                                <CardTitle className="hover:text-slate-400">{post.title}</CardTitle>
                                <CardDescription>{post.excerpt}</CardDescription>
                                <CardFooter>
                                    <div className="flex items-center justify-between">
                                        <div className="mr-3 flex h-8 w-8 justify-center rounded-full bg-slate-600 p-1 text-white">
                                            {post.author[0]}
                                        </div>
                                        <span className="text-xs text-gray-400">{post.author}</span>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
