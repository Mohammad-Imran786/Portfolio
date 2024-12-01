import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useVisibility from '../../Hooks/useVisibility'

const ExperienceCard = ({ title, date, description, location }) => {
  return (
    <div className="p-4 sm:p-6 bg-[#fdfdfe] bg-gradient-to-br from-sky-100 via-white to-white/0 border border-slate-100 rounded-xl hover:scale-95 transform transition-all duration-300 ease-in-out hover:shadow-lg hover:cursor-grab hover:border-2 hover:border-sky-100">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-xs sm:text-sm text-gray-400 mb-2">{date}</p>
      <p className="text-xs sm:text-sm text-gray-700 mb-5 font-[ubuntu]">{description}</p>
      <p className="text-[10px] sm:text-xs text-gray-500">{location}</p>
    </div>
  )
}

const Experience = ({ id }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right');

  const [targetRef, isVisible] = useVisibility(0.5)

  const experiences = [
    {
      title: 'Associate Software Engineer Intern @ SmartBear',
      date: 'Aug 2024 - Sep 2024',
      description: <div>
        <li className="type-disc">
          Developed Smart License Management Software applications using C++.
        </li>
        <li>
          FLTK (C++ Library) for GUI, and C++ REST SDK for APIs and Backend.
        </li>
        <li>Integrate APIs, reducing data redundancy and improving data quality.</li>
        <li>Acheived 80% of the user requirement.</li>
        <li>
          Gained valuable experience in software design, development and problem-solving.
        </li>
      </div>
      ,
      location: 'Bangalore, Karnataka, India',
    },
    {
      title: 'Frontend Developer @ QualiCorp Services Pvt Ltd.',
      date: 'Sep 2023 - Jun 2024',
      description: <div>
        <li>
          Updated and Maintained a WordPress website, ensuring optimal performance and functionality.
        </li>
        <li>
          Developed an E-Commerce Bag store from scratch using MERN stack.
        </li>
        <li>
          Contributed to the development of new features that increased customer engagement by 75%
        </li>
        <li>
          Optimized existing desing of the website, resulting in 50% reduction in processing time.
        </li>
      </div>,
      location: 'Bangalore, Karnataka, India',
    }
  ];

  const nextSlide = () => {
    setSlideDirection('right');
    setCurrentSlide((prev) => (prev + 1) % experiences.length);
  };

  const prevSlide = () => {
    setSlideDirection('left');
    setCurrentSlide((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const goToSlide = (index) => {
    setSlideDirection(index > currentSlide ? 'right' : 'left');
    setCurrentSlide(index);
  };

  const getSlideClass = (index) => {
    if (index === currentSlide) {
      return 'translate-x-0 opacity-100';
    }

    if (slideDirection === 'right') {
      return index < currentSlide ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0';
    } else {
      return index < currentSlide ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0';
    }
  };

  return (
    <div id={id} ref={targetRef} className={`relative my-60 max-md:my-28 px-12 pt-7 max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 animate-fadeInUp' : 'opacity-0' }`}>
      <h2 className="text-2xl sm:text-4xl font-[ubuntu] font-medium text-center mb-8">
        Work Experience
      </h2>

      <div className="relative max-w-md sm:max-w-2xl mx-auto">
        
        <button
          onClick={prevSlide}
          className="absolute -left-12 top-1/2 -translate-y-3/4 z-20 p-2 rounded-full hover:bg-white transition-colors duration-200"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-12 top-1/2 -translate-y-3/4 z-20 p-2 rounded-full hover:bg-white transition-colors duration-200"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        <div className="relative overflow-hidden">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`w-full absolute top-0 left-0 transform transition-all duration-500 ease-in-out ${getSlideClass(index)}`}
            >
              <ExperienceCard
                title={experience.title}
                date={experience.date}
                description={experience.description}
                location={experience.location}
              />
            </div>
          ))}
          <div className="invisible">
            <ExperienceCard
              title={experiences[0].title}
              date={experiences[0].date}
              description={experiences[0].description}
              location={experiences[0].location}
            />
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${currentSlide === index ? 'bg-blue-500 w-4' : 'bg-gray-300'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience