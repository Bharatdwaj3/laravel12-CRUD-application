// components/BlogEditor.tsx
import { Button } from '@/components/ui/button';
import Bold from '@tiptap/extension-bold';
import Heading from '@tiptap/extension-heading';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const BlogEditor = ({ content, onChange }: { content?: string; onChange: (value: string) => void }) => {
    const editor = useEditor({
        extensions: [StarterKit, Bold, Italic, Underline, Heading],
        content: content || '',
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });

    if (!editor) return null;

    return (
        <div className="space-y-4">
            {/* Toolbar */}
            <div className="flex flex-wrap gap-2 rounded-xl border bg-white p-2 shadow-sm">
                <Button
                    variant="outline"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'bg-gray-200' : ''}
                >
                    <b>B</b>
                </Button>
                <Button
                    variant="outline"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'bg-gray-200' : ''}
                >
                    Italic
                </Button>
                <Button
                    variant="outline"
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    className={editor.isActive('underline') ? 'bg-gray-200' : ''}
                >
                    Underline
                </Button>
                <Button
                    variant="outline"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={editor.isActive('heading', { level: 1 }) ? 'bg-gray-200' : ''}
                >
                    H1
                </Button>
                <Button
                    variant="outline"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editor.isActive('heading', { level: 2 }) ? 'bg-gray-200' : ''}
                >
                    H2
                </Button>
            </div>

            {/* Editor Area */}
            <EditorContent editor={editor} className="min-h-[400px] max-w-full rounded-xl border bg-white p-4 shadow-sm focus:outline-none" />
        </div>
    );
};

export default BlogEditor;
