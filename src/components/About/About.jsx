import React, { useState, useEffect, useRef } from 'react'
import useVisibility from '../../Hooks/useVisibility'

const About = ({ id }) => {
    
    const [colorChangeIndex, setColorChangeIndex] = useState(0)

    const text = ` Hi, I'm Mohammad Imran, a self-taught C++ and Front-End Developer specializing in React.js and Tailwind CSS. With a year of experience, I excel at problem-solving.`;

    const aboutRef = useRef(null);

    const wordsArray = text.split('');

    const handleScroll = () => {
        if (aboutRef.current) {
            const { top, bottom } = aboutRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight / 2;

            if (top < windowHeight && top >= 0) {
                const visibleFraction = (windowHeight - top) / windowHeight;
                const newIndex = Math.floor(Math.min(1, visibleFraction) * wordsArray.length);
                setColorChangeIndex(newIndex);
            }

            else if (bottom < windowHeight) {
                const newIndex = Math.floor(Math.max(0, (bottom) / windowHeight) * wordsArray.length);
                setColorChangeIndex(newIndex);
            }

            if (top < 0) {
                setColorChangeIndex(wordsArray.length);
            }
        } else {
            setColorChangeIndex(0);
        }
    };

    const handleTransitionSpeed = () => {
        if (aboutRef.current) {
            aboutRef.current.style.transition = '3s ease-in-out';
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleTransitionSpeed);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleTransitionSpeed);
        };
    }, [])

    const [targetRef, isVisible] = useVisibility(0.5)

    return (
        <div id={id} ref={targetRef} className={`my-28 max-md:my-12 p-12 max-md:p-4 max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 animate-fadeInUp' : 'opacity-0'}`}>
            <h1 className="text-7xl max-md:text-5xl font-bold text-slate-100 mb-5">About Me</h1>
            <p className="text-4xl max-md:text-2xl text-justify font-[ubuntu] font-semibold leading-snug" ref={aboutRef}>
                <span className="inline-block animate-wave">👋</span>
                {text.split('').map((word, index) => (
                    <span
                        key={index}
                        className={index < colorChangeIndex ? 'text-black' : 'text-[#f3f3f3]'}
                    >
                        {word}{''}
                    </span>
                ))}
            </p>
        </div>

    )
}

export default About