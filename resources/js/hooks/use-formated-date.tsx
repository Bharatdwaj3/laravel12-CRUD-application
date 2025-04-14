import { useEffect, useState } from 'react';

interface DateFormatOptions {
    year?: 'numeric' | '2-digit';
    month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
    day?: 'numeric' | '2-digit';
    weekday?: 'long' | 'short' | 'narrow';
    locale?: string;
    [key: string]: string | undefined;
}

export function useFormattedDate(dateString: string | undefined | null, options: DateFormatOptions = {}): string | null {
    const [formatted, setFormatted] = useState<string | null>(null);

    // Default formatting options
    const defaultOptions: DateFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        locale: 'en-US',
    };

    // Merge default options with any provided options
    const formatOptions = { ...defaultOptions, ...options };
    const { locale, ...dateFormatOptions } = formatOptions;

    useEffect(() => {
        if (!dateString) {
            setFormatted(null);
            return;
        }

        try {
            const date = new Date(dateString);
            const formattedDate = date.toLocaleDateString(locale || 'en-US', dateFormatOptions as Intl.DateTimeFormatOptions);
            setFormatted(formattedDate);
        } catch (error) {
            console.error('Error formatting date:', error);
            setFormatted(null);
        }
    }, [dateString, locale, JSON.stringify(dateFormatOptions)]);

    return formatted;
}
