import BlogCard from '@/components/blog-card';
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
            author: "John Smith",
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
                {blogPosts.map((post, index) => (<BlogCard key={index} {...post} />))}
                </div>
            </div>
        </AppLayout>
    );
}
