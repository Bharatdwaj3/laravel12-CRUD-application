import BlogCard from '@/components/blog-card-updated';
import FeaturedBlog from '@/components/featured-blog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Search } from 'lucide-react';

// Sample blog data
const sampleBlogs = [
    {
        id: 1,
        title: 'Building Modern Web Applications with React and Laravel',
        excerpt: "Learn how to create powerful web applications by combining React's frontend capabilities with Laravel's robust backend features.",
        author: 'Jane Cooper',
        image_url:
            'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        created_at: '2025-03-15',
        published_at: '2025-03-18',
        category: 'Development',
        read_time: 8,
    },
    {
        id: 2,
        title: 'The Future of AI in Web Development',
        excerpt: 'Explore how artificial intelligence is transforming the way we build and interact with websites and applications.',
        author: 'Alex Johnson',
        image_url:
            'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        created_at: '2025-04-02',
        published_at: '2025-04-05',
        category: 'Technology',
        read_time: 6,
    },
    {
        id: 3,
        title: 'Mastering Tailwind CSS for Rapid UI Development',
        excerpt: 'Discover how Tailwind CSS can help you create beautiful, responsive user interfaces quickly and efficiently.',
        author: 'Sarah Miller',
        image_url:
            'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        created_at: '2025-03-25',
        published_at: '2025-03-28',
        category: 'Design',
        read_time: 5,
    },
    {
        id: 4,
        title: 'Securing Your Web Applications: Best Practices',
        excerpt: 'Learn essential techniques to protect your web applications from common security vulnerabilities and threats.',
        author: 'Michael Chen',
        image_url:
            'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        created_at: '2025-04-08',
        published_at: '2025-04-10',
        category: 'Security',
        read_time: 7,
    },
];

export interface Blog {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    author: string;
    image_url: string;
    updated_at: string;
}

export interface PageProps {
    blogs: Blog[];
}
// Blog Card Component

// Featured Blog Component
export default function Welcome({ blogs }: PageProps) {
    console.log('blogs', blogs);
    const { auth } = usePage<SharedData>().props;
    const featuredBlog = blogs[blogs.length - 1];
    const regularBlogs = sampleBlogs.slice(1);

    return (
        <>
            <Head title="Blog - Your Knowledge Hub">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-[#FDFDFC] text-[#1b1b18] dark:bg-[#0a0a0a] dark:text-[#EDEDEC]">
                {/* Header */}
                <header className="border-b border-gray-100 dark:border-gray-800">
                    <div className="mx-auto flex max-w-7xl items-center justify-between p-6">
                        <div className="flex items-center">
                            <Link href="/" className="text-2xl font-bold">
                                devLog
                            </Link>
                        </div>
                        <div className="flex items-center gap-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="mx-auto max-w-7xl px-6 py-12">
                    {/* Hero Section */}
                    <div className="mb-16 text-center">
                        <img src="./public/devLog.png" alt="imge" />
                        <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">Discover Insights & Knowledge</h1>
                        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                            Stay updated with the latest trends, tutorials, and insights about web development, design, and technology.
                        </p>
                        <div className="mx-auto flex max-w-md flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                            <div className="relative w-full">
                                <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                                <Input type="text" placeholder="Search articles..." className="w-full pl-10" />
                            </div>
                            <Button className="w-full md:w-auto">Search</Button>
                        </div>
                    </div>

                    {/* Featured Blog */}
                    <FeaturedBlog blog={featuredBlog} />

                    {/* Category Tabs */}
                    <div className="mb-12">
                        <div className="flex items-center justify-between border-b border-gray-100 pb-6 dark:border-gray-800">
                            <h2 className="text-2xl font-bold">Latest Articles</h2>
                            <div className="flex space-x-4">
                                <Button variant="ghost" className="font-medium text-blue-600 dark:text-blue-400">
                                    All
                                </Button>
                                <Button variant="ghost">Development</Button>
                                <Button variant="ghost">Technology</Button>
                                <Button variant="ghost">Design</Button>
                            </div>
                        </div>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {regularBlogs.map((blog) => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))}
                    </div>

                    {/* Newsletter Section */}
                    <div className="mt-20 rounded-xl bg-gray-50 p-8 text-center dark:bg-gray-900">
                        <h2 className="mb-4 text-3xl font-bold">Subscribe to Our Newsletter</h2>
                        <p className="mb-6 text-gray-600 dark:text-gray-300">Get the latest articles and news delivered to your inbox.</p>
                        <div className="mx-auto flex max-w-md flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                            <Input type="email" placeholder="Your email address" className="flex-1" />
                            <Button>Subscribe</Button>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="border-t border-gray-100 bg-white py-12 dark:border-gray-800 dark:bg-[#0a0a0a]">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid gap-8 md:grid-cols-4">
                            <div>
                                <h3 className="mb-4 text-lg font-bold">BlogHub</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    A place for developers and designers to share knowledge and grow together.
                                </p>
                            </div>
                            <div>
                                <h4 className="mb-4 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Quick Links</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="mb-4 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Categories</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                                            Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                                            Design
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                                            Technology
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                                            Security
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="mb-4 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Follow Us</h4>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                        <span className="sr-only">Twitter</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                        <span className="sr-only">GitHub</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                            />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                        <span className="sr-only">LinkedIn</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 border-t border-gray-100 pt-8 text-center text-sm text-gray-500 dark:border-gray-800">
                            <p>© {new Date().getFullYear()} BlogHub. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
