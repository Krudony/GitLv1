import React from 'react';
import clsx from 'clsx';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'image' | 'circle' | 'card';
}

const Skeleton: React.FC<SkeletonProps> = ({ className, variant = 'text' }) => {
  const variantStyles = {
    text: 'h-4 w-full rounded',
    image: 'aspect-video w-full rounded-lg',
    circle: 'h-10 w-10 rounded-full',
    card: 'h-48 w-full rounded-lg',
  };

  return (
    <div
      className={clsx(
        'animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200',
        variantStyles[variant],
        className
      )}
    />
  );
};

interface SkeletonLoaderProps {
  count?: number;
  variant?: 'text' | 'image' | 'circle' | 'card';
  gap?: boolean;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  count = 3,
  variant = 'text',
  gap = true,
}) => {
  return (
    <div className={clsx(gap && 'space-y-4')}>
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} variant={variant} />
      ))}
    </div>
  );
};

export default Skeleton;
