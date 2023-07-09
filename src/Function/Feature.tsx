import React, { useEffect } from 'react';

function getScrollClass() {
    const isMobile = /Mobi/.test(navigator.userAgent); // Check if the user agent is from a mobile device

    if (isMobile) {
        // Mobile platform
        return 'overflow-y-scroll overflow-x-hidden';
    } else {
        // Web desktop screen
        return 'overflow-hidden';
    }
}

interface ScrollableDivProps {
    children: React.ReactNode;
}

function ScrollableDiv({ children }: ScrollableDivProps) {
    useEffect(() => {
        // Function to enable/disable vertical scrolling on web desktop screens
        const handleScroll = () => {
            const isMobile = /Mobi/.test(navigator.userAgent);
            if (!isMobile) {
                document.documentElement.style.overflowY = 'hidden';
            }
        };

        // Enable/disable vertical scrolling on initial render
        handleScroll();

        // Event listener to handle scrolling
        window.addEventListener('scroll', handleScroll);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollClass = getScrollClass();

    return (
        <div className={scrollClass}>
            <div className="scrollable-content">{children}</div>
        </div>
    );
}

export default ScrollableDiv;
