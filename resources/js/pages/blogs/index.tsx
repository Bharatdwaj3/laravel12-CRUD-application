import BlogCard from '@/components/blog-card';
import { Card, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head , Link} from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Blogs',
        href: '/blogs',
    },
];

export default function Blogs() {
    const blogPosts = [
        {
          title: "Getting Started with React and TypeScript",
          excerpt: "Learn how to set up a new project with React and TypeScript from scratch, including best practices and common pitfalls to avoid.",
          imageUrl: "https://picsum.photos/200/300",
          author: "Jane Doe",
          date: "Mar 28, 2025",
          readTime: "5",
          category: "React"
        },
        {
          title: "Mastering Tailwind CSS: Advanced Techniques",
          excerpt: "Discover advanced techniques and strategies to take your Tailwind CSS skills to the next level.",
          imageUrl: "https://picsum.photos/200/300",
          author: "John Smith",
          date: "Mar 25, 2025",
          readTime: "8",
          category: "CSS"
        },
        {
            title: "Mastering Tailwind CSS: Advanced Techniques",
            excerpt: "Discover advanced techniques and strategies to take your Tailwind CSS skills to the next level.",
            imageUrl: "https://picsum.photos/200/300",
            author: "John Smith",
            date: "Mar 25, 2025",
            readTime: "8",
            category: "CSS"
          },
          {
            title: "Mastering Tailwind CSS: Advanced Techniques",
            excerpt: "Discover advanced techniques and strategies to take your Tailwind CSS skills to the next level.",
            imageUrl: "https://picsum.photos/200/300",
            author: "Mitch Smith",
            date: "Mar 25, 2025",
            readTime: "8",
            category: "CSS"
          },
      ];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Blogs" />
            <div className="max-w-6xl mx-auto">
                <div className='flex justify-between items-center m-4'>
                <Link href={route('blogs.create')} className="px-4 py-2 bg-white text-black rounded hover:bg-slate-200">
                    Create New 
                </Link>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 m-2">
                {blogPosts.map((post, index) => (
                    <Link href='/blogs/{index}' key={index}>
                    <Card className='transition-all duration-300 hover:shadow-2xl hover:translate-y-1' 
                    key={index} {...post}> 
                <div className="relative h-48 w-full overflow-hidden transition-all rounded-xl border duration-300 hover:shadow-2xl hover:translate-y-1">
                    <img 
                    className='h-full w-full object-cover transition-transform duration-500 hover:scale-105'
                    src={post.imageUrl} alt="" />
                </div>
                <CardTitle className=" hover:text-slate-400">
                    {post.title}
                </CardTitle>
                <CardDescription>
                    {post.excerpt}
                </CardDescription>
                <CardFooter>
                <div className='flex items-center justify-between'>
                    <div className="h-8 w-8 rounded-full bg-slate-600 mr-3 flex justify-center p-1 text-white">{post.author[0]}</div>
                        <span className="text-xs text-gray-400">{post.author}</span>
                    </div>
                </CardFooter>
                </Card>
                    </Link>))}
                
                </div>

            </div>
        </AppLayout>
    );
}
