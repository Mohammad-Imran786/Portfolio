import React from 'react'
import Particle from '../Particle/Particle'
import { IconEye, IconMapPin, IconBriefcase } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Hero = () => {

    const scrollWithOffset = (elem) => {
        const yCoordinate = elem.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
      }

    return (
        <div className="relative pt-16 w-full min-h-screen">
        <div className="absolute">
                <Particle />
            </div>
            <div className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center px-4">
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-6xl sm:text-5xl font-[ubuntu] font-bold text-zinc-700 mb-4">
                        Bringing Ideas to Life with
                        <br /> Pixel-perfect <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-pink-500 via-blue-400 via-purple-500 to-pink-400 inline-block animate-rainbow bg-[size:200%_auto]">Front-End</span> &
                        <br/>
                        <span className="bg-clip-text text-transparent bg-gradient-to-l from-blue-600 via-pink-500 via-blue-400 via-violet-500 to-pink-400 inline-block animate-rainbow bg-[size:200%_auto]">C++</span> Logic
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-6">
                        I craft robust web applications with modern technologies.
                        Specializing in Front-End Development. Expertise in
                        C++ and React. On the way to become a Full-stack Developer.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    <HashLink smooth to="#projects" scroll={scrollWithOffset}>
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                            View My Projects
                        </button>
                    </HashLink>

                    <Link to="https://drive.google.com/file/d/1QBgT--i9vDVbbtNoDqBdbpUxH44FdAv1/view?usp=sharing" target="_blank">
                        <button className="px-6 py-2.5 border-2 border-zinc-500 text-gray-800 rounded-lg hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2">
                            <IconEye />
                            My Resume
                        </button>
                    </Link>
                </div>

                <div className="fixed bottom-0 max-w-6xl mx-auto left-0 right-0 h-12 bg-white border-t border-gray-100 px-4">
                    <div className="h-full flex items-center justify-between">
                        {/* Left side - Location */}
                        <div className="flex items-center gap-2">
                            <IconMapPin className="text-blue-600 w-5 h-5" />
                            <h3 className="text-sm md:text-base text-gray-700 font-medium">Bengaluru, India</h3>
                        </div>

                        {/* Right side - Availability */}
                        <div className="flex items-center gap-2">
                            <IconBriefcase className="text-zinc-400"/>
                            <h4 className="text-sm md:text-base text-green-600">
                            Available for Immediate Full-time Opportunities
                            </h4>
                        </div>
                    </div>
                </div>

                {/* Tech Stack Pills */}
                {/* <div className="flex flex-wrap justify-center gap-3 max-w-2xl mb-12">
                    {['JavaScript', 'C++', 'React.js', 'Node.js', 'MongoDB', 'Express.js', 'Data Structures & Algorithm', 'Docker'].map((tech) => (
                        <span key={tech} className="px-4 py-2 bg-gray-50 text-gray-600 rounded-full text-sm">
                            {tech}
                        </span>
                    ))}
                </div> */}

            </div>
        </div>
    )
}

export default Hero