// ToastProvider.js
import React, { createContext, useContext } from 'react';
import { Toaster, toast } from 'react-hot-toast';
interface ToastContext {
  (message: string, type?: string): void;
}

const ToastContext = createContext<ToastContext | null>(null);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const showToast: ToastContext = (message, type = 'success') => {
    switch (type) {
      case 'success':
        toast.success(message);
        break;
      case 'error':
        toast.error(message);
        break;
      case 'info':
        toast(message); // Default toast
        break;
      default:
        toast(message);
        break;
    }
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <Toaster />
    </ToastContext.Provider>
  );
};

// Custom hook to access the context
export const useToast = (): ToastContext => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
