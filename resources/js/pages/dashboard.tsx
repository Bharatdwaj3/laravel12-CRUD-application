import Table from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, router } from '@inertiajs/react';
import { toast } from 'react-toastify';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

interface Data {
    id: string;
    title: string;
    category: string;
    excerpt: string;
}

export default function Dashboard({ data }: { data: Record<string, Data> | Data[] }) {
    console.log(data, typeof data);
    const items = Array.isArray(data) ? data : Object.values(data || {});

    const handleDelete = (id: string) => {
        // Handle delete action here
        console.log('Delete item with ID:', id);
        router.delete(route('blogs.destroy', id), {
            onSuccess: () => {
                toast.warn('Item deleted successfully');
            },
            onError: () => {
                toast.error('Failed to delete item');
            },
        });
    };

    const handleUpdate = (id: string) => {
        // Handle update action here
        console.log('Update item with ID:', id);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="my-2 flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <Table items={items} onEdit={handleUpdate} onDelete={handleDelete} />
            </div>
        </AppLayout>
    );
}
