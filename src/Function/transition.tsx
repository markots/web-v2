import React, { useRef, useState } from 'react';
import { Transition } from '@headlessui/react';

interface SliderProps {
    slides: React.ReactNode[];
}

const FeatureSlider: React.FC<SliderProps> = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    const nextIndex = (currentIndex + 1) % slides.length;
    const sliderRef = useRef<HTMLDivElement>(null);

    const goToPrevSlide = () => {
        setCurrentIndex(prevIndex);
        sliderRef.current?.scrollTo({
            left: sliderRef.current.scrollLeft - sliderRef.current.clientWidth,
            behavior: 'smooth',
        });
    };

    const goToNextSlide = () => {
        setCurrentIndex(nextIndex);
        sliderRef.current?.scrollTo({
            left: sliderRef.current.scrollLeft + sliderRef.current.clientWidth,
            behavior: 'smooth',
        });
    };

    return (
        <div className="relative">
            <div className="overflow-x-auto" ref={sliderRef}>
                <div className="flex" style={{ scrollSnapType: 'x mandatory' }}>
                    {slides.map((slide, index) => (
                        <Transition
                            key={index}
                            show={index === currentIndex}
                            enter="transition-transform duration-300 ease-out"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition-transform duration-300 ease-out"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            {slide}
                        </Transition>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureSlider;
