//import { toast } from "react-toastify";
import { Share2 } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from './ui/button';

export default function ShareButton({ title, url }: { title: string; url: string }) {
    const handleShare = async () => {
        //Web share API
        if (navigator.share) {
            try {
                await navigator.share({
                    title: title,
                    url: url,
                });
            } catch (error) {
                console.error('Error sharing:', error);
            }
        }
        // Fallback for browsers that do not support the Web Share API
        else {
            navigator.clipboard
                .writeText(url)
                .then(() => {
                    toast.success('Link copied to clipboard!');
                })
                .catch((error: any) => {
                    console.error('Error copying to clipboard:', error);
                    toast.error('Failed to copy link to clipboard.');
                });
        }
    };
    return (
        <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700" onClick={handleShare}>
            <Share2 className="mr-2 h-4 w-4" />
            Share
        </Button>
    );
}
