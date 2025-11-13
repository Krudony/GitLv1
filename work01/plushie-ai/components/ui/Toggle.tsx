import React, { useState } from 'react';
import clsx from 'clsx';

interface ToggleProps extends React.HTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className, checked = false, onChange, disabled = false, label, ...props }, ref) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleToggle = () => {
      if (!disabled) {
        const newState = !isChecked;
        setIsChecked(newState);
        onChange?.(newState);
      }
    };

    return (
      <div className="flex items-center gap-3">
        <button
          ref={ref}
          type="button"
          role="switch"
          aria-checked={isChecked}
          onClick={handleToggle}
          disabled={disabled}
          className={clsx(
            'relative inline-flex h-6 w-11 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
            isChecked ? 'bg-primary-600 focus:ring-primary-500' : 'bg-gray-300 focus:ring-gray-500',
            className
          )}
          {...props}
        >
          <span
            className={clsx(
              'inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200',
              isChecked ? 'translate-x-6' : 'translate-x-0.5'
            )}
          />
        </button>
        {label && <label className="select-none text-sm font-medium text-gray-700">{label}</label>}
      </div>
    );
  }
);

Toggle.displayName = 'Toggle';

export default Toggle;
