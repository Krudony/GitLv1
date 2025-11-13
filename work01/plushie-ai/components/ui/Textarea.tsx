import React from 'react';
import clsx from 'clsx';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  maxCharacters?: number;
  showCharacterCount?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      maxCharacters,
      showCharacterCount = false,
      value,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'w-full rounded-lg border-2 px-4 py-2.5 font-medium transition-all duration-200 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed resize-none';

    const borderStyles = error
      ? 'border-error-500 focus:border-error-600 focus:ring-2 focus:ring-error-200'
      : 'border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200';

    const textareaStyles = clsx(baseStyles, borderStyles, className);

    const characterCount = typeof value === 'string' ? value.length : 0;

    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={textareaStyles}
          disabled={disabled}
          value={value}
          maxLength={maxCharacters}
          {...props}
        />
        <div className="mt-2 flex justify-between text-sm">
          <div>
            {error && <p className="text-error-600">{error}</p>}
            {helperText && !error && <p className="text-gray-500">{helperText}</p>}
          </div>
          {showCharacterCount && maxCharacters && (
            <p className="text-gray-500">
              {characterCount} / {maxCharacters}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
