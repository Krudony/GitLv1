import React from 'react';
import clsx from 'clsx';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${Math.random()}`;

    return (
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            className={clsx(
              'h-5 w-5 cursor-pointer rounded border-2 border-gray-300 text-primary-600 transition-all duration-200 focus:ring-2 focus:ring-primary-200 disabled:cursor-not-allowed disabled:opacity-50',
              error && 'border-error-500',
              className
            )}
            {...props}
          />
          {label && (
            <label
              htmlFor={checkboxId}
              className="cursor-pointer select-none text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              {label}
            </label>
          )}
        </div>
        {error && <p className="mt-1 text-sm text-error-600">{error}</p>}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
