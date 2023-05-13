import React from 'react';

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
    return (
        < svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class={className}>
            <circle cx="12" cy="12" r="10" />
            <text x="12" y="12" font-size="6" text-anchor="middle" dominant-baseline="middle" fill="white">Palm</text>
        </svg >


    );
};

export default Logo;
