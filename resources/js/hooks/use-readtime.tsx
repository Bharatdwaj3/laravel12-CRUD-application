import { Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

// The hook to calculate reading time
export function useReadingTime({ content }: { content: string }) {
    const [readingTime, setReadingTime] = useState(0);

    useEffect(() => {
        if (!content) return;

        // Average reading speed: 200 words per minute
        const wordCount = content.split(/\s+/).length;
        const minutes = Math.ceil(wordCount / 200);
        setReadingTime(minutes);
    }, [content]);

    return readingTime;
}

// A component that uses the hook
export function ReadingTimeDisplay({ content }: { content: string }) {
    const readingTime = useReadingTime({ content });

    return (
        <div className="flex items-center text-sm text-gray-500">
            <Clock className="mr-1 h-4 w-4" />
            <span>{readingTime} min read</span>
        </div>
    );
}
