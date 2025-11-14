import React, { useEffect } from 'react';
import clsx from 'clsx';
import { CheckCircle, AlertCircle, AlertTriangle, Info, X } from 'lucide-react';

interface ToastProps {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number;
  onClose: (id: string) => void;
}

const Toast: React.FC<ToastProps> = ({ id, type, message, duration = 5000, onClose }) => {
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        onClose(id);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [id, duration, onClose]);

  const variants = {
    success: {
      bg: 'bg-success-100',
      border: 'border-l-4 border-success-500',
      icon: 'text-success-600',
      text: 'text-success-900',
    },
    error: {
      bg: 'bg-error-100',
      border: 'border-l-4 border-error-500',
      icon: 'text-error-600',
      text: 'text-error-900',
    },
    warning: {
      bg: 'bg-warning-100',
      border: 'border-l-4 border-warning-500',
      icon: 'text-warning-600',
      text: 'text-warning-900',
    },
    info: {
      bg: 'bg-blue-100',
      border: 'border-l-4 border-blue-500',
      icon: 'text-blue-600',
      text: 'text-blue-900',
    },
  };

  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    warning: AlertTriangle,
    info: Info,
  };

  const styles = variants[type];
  const Icon = icons[type];

  return (
    <div
      className={clsx(
        'flex items-center gap-3 rounded-lg p-4 shadow-lg',
        styles.bg,
        styles.border,
        'animate-in slide-in-from-right-full duration-300'
      )}
      role="alert"
    >
      <Icon className={clsx('h-5 w-5 flex-shrink-0', styles.icon)} />
      <p className={clsx('flex-1 text-sm font-medium', styles.text)}>{message}</p>
      <button
        onClick={() => onClose(id)}
        className="flex-shrink-0 text-gray-400 hover:text-gray-600"
        aria-label="Close toast"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Toast;
