import React from 'react';
import clsx from 'clsx';

interface ImageGridProps {
  images: Array<{
    id: string;
    src: string;
    alt: string;
    onClick?: (id: string) => void;
  }>;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, columns = 3, gap = 'md' }) => {
  const columnStyles = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-4',
  };

  const gapStyles = {
    sm: 'gap-3',
    md: 'gap-4',
    lg: 'gap-6',
  };

  return (
    <div className={clsx('grid', columnStyles[columns], gapStyles[gap])}>
      {images.map((image) => (
        <div
          key={image.id}
          onClick={() => image.onClick?.(image.id)}
          className={clsx(
            'aspect-square overflow-hidden rounded-lg border-2 border-gray-200 bg-gray-100',
            image.onClick && 'cursor-pointer transition-all hover:border-primary-400 hover:shadow-lg'
          )}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
