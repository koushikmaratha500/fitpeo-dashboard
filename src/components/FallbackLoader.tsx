import React from 'react';
// assets
import LoaderImage from 'src/assets/images/Loader.svg'

export const FallbackLoader: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <img src={LoaderImage} className='w-48 h-48' />
        </div>
    );
};
