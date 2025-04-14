import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import { Link } from '@inertiajs/react';

interface TableItem {
  id: string;
  title: string;
  category: string;
  excerpt: string;
}

interface TableProps {
  items: TableItem[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function Table({ items, onEdit, onDelete }: TableProps) {
  return (
    <div className="w-full overflow-x-auto rounded-lg shadow">
      <table className="w-full min-w-full divide-y">
        <thead className="divide-y divide-slate-200">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Brief
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800">
              <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-900 dark:text-slate-100">
                {item.title}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-900 dark:text-slate-100">
                {item.category}
              </td>
              <td className="px-6 py-4 text-sm text-slate-900 dark:text-slate-100">
                {item.excerpt}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm">
                <div className="flex space-x-2">

                <Link href={route('blogs.edit', { id: item.id })}
                className="rounded p-1 text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-900"
                aria-label="Edit">
                <Pencil size={16} />
                  </Link>

                 
                  <button
                    onClick={() => onDelete(item.id)}
                    className="rounded p-1 text-red-600 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-900"
                    aria-label="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}