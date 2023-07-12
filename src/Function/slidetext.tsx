import React, { useEffect, useRef } from 'react';

function SlideInText() {
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    textRef.current?.classList.add('slide-in');
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(textRef.current!);

        return () => {
            observer.disconnect();
        };
    }, []);

    const containerStyle = {
        display: 'flex',
        justifyContent: 'left',
    };

    const textStyle = {
        transform: 'translateX(-100%)',
        transition: 'transform 0.5s ease-out',
    };

    return (
        <div style={containerStyle}>
            <p ref={textRef} style={textStyle}>
                magnitude is better
            </p>
        </div>
    );
}

export default SlideInText;
