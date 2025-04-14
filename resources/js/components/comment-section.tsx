import { Button } from './ui/button';

export default function CommentSection() {
    return (
        <div className="mt-10 border-t border-gray-200 pt-6">
            <h3 className="mb-6 text-xl font-bold">Comments</h3>
            <div className="rounded-lg bg-gray-50 p-6 text-center">
                <p className="mb-4 text-gray-600">Join the conversation! Sign in to leave a comment.</p>
                <Button>Sign In to Comment</Button>
            </div>
        </div>
    );
}
