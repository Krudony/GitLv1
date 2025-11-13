import React from 'react';
import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      icon,
      iconPosition = 'left',
      disabled,
      type = 'text',
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'w-full rounded-lg border-2 px-4 py-2.5 font-medium transition-all duration-200 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed';

    const borderStyles = error
      ? 'border-error-500 focus:border-error-600 focus:ring-2 focus:ring-error-200'
      : 'border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200';

    const inputStyles = clsx(baseStyles, borderStyles, icon && (iconPosition === 'left' ? 'pl-10' : 'pr-10'), className);

    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && iconPosition === 'left' && (
            <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            type={type}
            className={inputStyles}
            disabled={disabled}
            {...props}
          />
          {icon && iconPosition === 'right' && (
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              {icon}
            </div>
          )}
        </div>
        {error && <p className="mt-1 text-sm text-error-600">{error}</p>}
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
