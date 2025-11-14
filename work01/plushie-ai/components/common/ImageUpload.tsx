'use client';

import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import clsx from 'clsx';
import Button from '@/components/ui/Button';
import Alert from '@/components/ui/Alert';

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  maxSizeInMB?: number;
  allowedFormats?: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onImageSelect,
  maxSizeInMB = 10,
  allowedFormats = ['image/jpeg', 'image/png', 'image/webp'],
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const validateFile = (file: File): string | null => {
    if (!allowedFormats.includes(file.type)) {
      return `Invalid file format. Allowed formats: ${allowedFormats.join(', ')}`;
    }

    if (file.size > maxSizeInMB * 1024 * 1024) {
      return `File size exceeds ${maxSizeInMB}MB limit`;
    }

    return null;
  };

  const handleFileSelect = (file: File) => {
    const validationError = validateFile(file);

    if (validationError) {
      setError(validationError);
      setSelectedFile(null);
      setPreview(null);
      return;
    }

    setError(null);
    setSelectedFile(file);
    onImageSelect(file);

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleClear = () => {
    setSelectedFile(null);
    setPreview(null);
    setError(null);
  };

  if (selectedFile && preview) {
    return (
      <div className="space-y-4">
        <div className="relative overflow-hidden rounded-lg border-2 border-gray-200">
          <img src={preview} alt="Preview" className="h-64 w-full object-cover" />
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">
            File: <span className="text-gray-900">{selectedFile.name}</span>
          </p>
          <p className="text-sm text-gray-600">
            Size: {(selectedFile.size / 1024 / 1024).toFixed(2)}MB
          </p>
        </div>
        <Button fullWidth variant="outline" onClick={handleClear}>
          <X className="h-4 w-4" />
          Remove Image
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={clsx(
          'flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-8 transition-colors',
          isDragging
            ? 'border-primary-500 bg-primary-50'
            : 'border-gray-300 bg-gray-50 hover:bg-gray-100'
        )}
      >
        <Upload className="h-12 w-12 text-gray-400" />
        <p className="mt-2 text-center text-sm font-medium text-gray-700">
          Drag and drop your image here
        </p>
        <p className="text-center text-xs text-gray-500">or</p>
        <label className="mt-2 cursor-pointer">
          <input
            type="file"
            accept={allowedFormats.join(',')}
            onChange={handleInputChange}
            className="hidden"
            aria-label="Upload image"
          />
          <Button variant="primary">
            Select File
          </Button>
        </label>
        <p className="mt-3 text-center text-xs text-gray-500">
          Supported formats: JPEG, PNG, WebP
          <br />
          Max size: {maxSizeInMB}MB
        </p>
      </div>

      {error && (
        <Alert variant="error" dismissible>
          {error}
        </Alert>
      )}
    </div>
  );
};

export default ImageUpload;
