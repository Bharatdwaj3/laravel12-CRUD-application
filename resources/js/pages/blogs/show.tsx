import ShareButton from '@/components/share-button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useFormattedDate } from '@/hooks/use-formated-date';
import { ReadingTimeDisplay } from '@/hooks/use-readtime';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Blog',
        href: '/blogs/{id}',
    },
];

type BlogPost = {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    image_url: string;
    updated_at: string;
};

function TiptapRenderer({ content }: { content: string }) {
    const editor = useEditor({
        extensions: [StarterKit],
        content: content,
        editable: false,
    });
    useEffect(() => {
        if (editor) {
            editor.commands.setContent(content);
        }
    }, [content]);

    return <EditorContent editor={editor} className="tiptap-display prose prose-lg max-w-none" />;
}

export default function Blog({ blog }: { blog: BlogPost }) {
    //console.log(blog);
    const formattedDate = useFormattedDate(blog.updated_at);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={blog.title} />
            <div className="container mx-auto max-w-6xl px-4 pt-6 pb-12 md:px-6 lg:px-8">
                {/* Article Header */}
                <header className="mb-8">
                    <h1 className="mb-4 text-4xl leading-tight font-bold text-gray-900 md:text-5xl">{blog.title}</h1>

                    {blog.excerpt && <p className="mb-6 text-xl leading-relaxed text-gray-600">{blog.excerpt}</p>}

                    {/* Author and Meta Info */}
                    <div className="mb-8 flex flex-wrap items-center justify-between border-y border-gray-200 py-4">
                        <div className="mb-2 flex items-center md:mb-0">
                            <Avatar className="mr-3 h-10 w-10">
                                <AvatarFallback className="bg-blue-100 text-blue-800">{blog.author.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="font-medium">{blog.author}</div>
                                {formattedDate && <div className="text-sm text-gray-500">{formattedDate}</div>}
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <ReadingTimeDisplay content={blog.content} />
                            <ShareButton title={blog.title} url={window.location.href} />
                        </div>
                    </div>
                </header>

                {/* Featured Image with shadow and rounded corners */}
                <div className="mb-10 overflow-hidden rounded-xl shadow-lg">
                    <img src={blog.image_url} alt={`Featured image for ${blog.title}`} className="h-auto w-full object-cover" />
                </div>

                {/* Content Area */}
                <article className="relative">
                    {/* Main Content */}
                    <div>
                        <TiptapRenderer content={blog.content} />
                    </div>
                </article>

                {/* Tags - Optional */}
                <div className="mt-10 border-t border-gray-200 pt-6">
                    <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 hover:bg-gray-200">Technology</span>
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 hover:bg-gray-200">Web Development</span>
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 hover:bg-gray-200">React</span>
                    </div>
                </div>

                {/* Author Bio - Optional */}
                <div className="mt-10 rounded-lg bg-gray-50 p-6">
                    <h3 className="mb-3 text-lg font-bold">About the Author</h3>
                    <div className="flex items-start">
                        <Avatar className="mr-4 h-12 w-12">
                            <AvatarFallback className="bg-blue-100 text-blue-800">{blog.author.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="mb-2 text-lg font-bold">{blog.author}</h3>
                            <p className="text-gray-600">
                                This is where you can add a brief author bio that describes their expertise and background. This helps build
                                credibility and connection with your readers.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Comments Section - Optional */}
            </div>
        </AppLayout>
    );
}
