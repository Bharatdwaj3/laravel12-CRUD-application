import React from 'react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  imageUrl,
  author,
  date,
  readTime,
  category
}) => {
  return (
    <div className="overflow-hidden rounded-lg bg-black shadow-lg transition-all duration-300 hover:shadow-2xl hover:translate-y-1">
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={imageUrl || "/api/placeholder/800/400"} 
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h2 className="mb-3 text-xl font-bold text-white hover:text-indigo-400">
          {title}
        </h2>
        
        <p className="mb-4 text-sm text-gray-400 line-clamp-2">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-gray-700 mr-3"></div>
            <span className="text-xs text-gray-400">{author}</span>
          </div>
          
          <div className="flex text-xs text-gray-500">
            <span className="mr-3">{date}</span>
            <span>{readTime} min read</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;