import React from 'react';
import clsx from 'clsx';
import { AlertCircle, CheckCircle, AlertTriangle, Info, X } from 'lucide-react';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'success' | 'error' | 'warning' | 'info';
  dismissible?: boolean;
  onDismiss?: () => void;
  title?: string;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant = 'info',
      dismissible = false,
      onDismiss,
      title,
      children,
      ...props
    },
    ref
  ) => {
    const [isDismissed, setIsDismissed] = React.useState(false);

    const handleDismiss = () => {
      setIsDismissed(true);
      onDismiss?.();
    };

    if (isDismissed) return null;

    const variants = {
      success: {
        bg: 'bg-success-50',
        border: 'border-success-300',
        icon: 'text-success-600',
        title: 'text-success-900',
        text: 'text-success-800',
      },
      error: {
        bg: 'bg-error-50',
        border: 'border-error-300',
        icon: 'text-error-600',
        title: 'text-error-900',
        text: 'text-error-800',
      },
      warning: {
        bg: 'bg-warning-50',
        border: 'border-warning-300',
        icon: 'text-warning-600',
        title: 'text-warning-900',
        text: 'text-warning-800',
      },
      info: {
        bg: 'bg-blue-50',
        border: 'border-blue-300',
        icon: 'text-blue-600',
        title: 'text-blue-900',
        text: 'text-blue-800',
      },
    };

    const icons = {
      success: CheckCircle,
      error: AlertCircle,
      warning: AlertTriangle,
      info: Info,
    };

    const styles = variants[variant];
    const Icon = icons[variant];

    return (
      <div
        ref={ref}
        className={clsx(
          'flex gap-3 rounded-lg border-l-4 p-4',
          styles.bg,
          styles.border,
          className
        )}
        {...props}
        role="alert"
      >
        <Icon className={clsx('h-5 w-5 flex-shrink-0', styles.icon)} />
        <div className="flex-1">
          {title && <h3 className={clsx('font-semibold', styles.title)}>{title}</h3>}
          <p className={clsx(title ? 'mt-1 text-sm' : 'text-sm', styles.text)}>{children}</p>
        </div>
        {dismissible && (
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600"
            aria-label="Dismiss alert"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';

export default Alert;
