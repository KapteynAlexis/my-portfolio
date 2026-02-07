import React from 'react';

const VideoBackground: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]">
            <video
                className="w-full h-full object-cover pointer-events-none" autoPlay muted loop playsInline preload="auto"
            >
                <source src="/bg.mp4" type="video/mp4" />
            </video>
        </div>
    );
}   
export default VideoBackground;