import React from 'react';

const AuthButton = ({ type = 'button', loading = false, onClick, children, variant = 'primary', className = '' }) => {
  const baseClasses = "w-full py-3 px-4 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50 text-base";
  
  const variantClasses = {
    primary: "bg-primary-500 text-secondary-800 hover:bg-primary-600 focus:ring-primary-500 shadow-sm",
    secondary: "bg-cream text-secondary-800 hover:bg-gray-100 focus:ring-secondary-400 border border-secondary-300",
    outline: "bg-transparent border border-primary-500 text-primary-600 hover:bg-primary-50 focus:ring-primary-500"
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`${baseClasses} ${variantClasses[variant]} ${className} ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
    >
      {loading ? (
        <span className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default AuthButton;
