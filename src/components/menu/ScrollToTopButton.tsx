'use client'

import { useEffect, useState } from 'react';
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].boundingClientRect.y < 0) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            }
        );

        const target = document.getElementById('intersection-observer-target');
        if (target) {
            observer.observe(target);
        }

        return () => {
            if (target) {
                observer.unobserve(target);
            }
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    if (!isVisible) return null;

    return (
        <div 
            onClick={scrollToTop}
            className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-blue-hover flex items-center justify-center fixed bottom-8 right-4 cursor-pointer hover:bg-blue-600 transition-colors duration-300"
        >
            <ChevronUpIcon className="w-6 h-6 md:w-8 md:h- text-white" />
        </div>
    )
}

export default ScrollToTopButton;