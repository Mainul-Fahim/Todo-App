import React from 'react';

interface ButtonProps {
    onClick?: () => void;
    className?: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, className = 'bg-blue-500', children }) => {
    return (
        <button
            onClick={onClick}
            className={`${className} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
        >
            {children}
        </button>
    );
};

export default Button;