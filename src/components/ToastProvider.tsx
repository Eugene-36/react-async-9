// ToastProvider.js
import React, { createContext, useContext } from 'react';
import { Toaster, toast } from 'react-hot-toast';

// Create a context for the toast function
const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const showToast = (message, type = 'success') => {
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

// Custom hook to use the toast function
export const useToast = () => useContext(ToastContext);
