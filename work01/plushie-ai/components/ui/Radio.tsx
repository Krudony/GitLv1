import React from 'react';
import clsx from 'clsx';

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, id, ...props }, ref) => {
    const radioId = id || `radio-${Math.random()}`;

    return (
      <div className="flex items-center gap-2">
        <input
          ref={ref}
          id={radioId}
          type="radio"
          className={clsx(
            'h-5 w-5 cursor-pointer border-2 border-gray-300 text-primary-600 transition-all duration-200 focus:ring-2 focus:ring-primary-200 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          {...props}
        />
        {label && (
          <label
            htmlFor={radioId}
            className="cursor-pointer select-none text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Radio.displayName = 'Radio';

export default Radio;
