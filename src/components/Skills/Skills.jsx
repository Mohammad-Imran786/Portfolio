import React from 'react'
import Marquee from 'react-fast-marquee'
import useVisibility from '../../Hooks/useVisibility'

const SkillItem = ({ image, name }) => (
    <div className="border-2 border-[#f9f9f9] m-1 bg-[#fdfdfe] rounded-xl flex flex-col items-center justify-center px-5 py-2 cursor-pointer hover:scale-105 max-md:px-3 max-md:py-1">
        <img src={image} alt={name} className="w-8 h-8 mb-1 max-md:w-6 max-md:h-6" />
        <p className="text-xs text-center text-gray-500">{name}</p>
    </div>
)

const Skills = ({ id }) => {
    const skills1 = [
        { src: "js-logo.png", name: "JavaScript" },
        { src: "cpp-logo.png", name: "C++" },
        { src: "reactjs-logo.png", name: "React.js" },
        { src: "html5-logo.png", name: "HTML5" },
        { src: "tailwindcss-logo.png", name: "Tailwind CSS" },
        { src: "css3-logo.png", name: "CSS3" }
    ]
    const skills2 = [
        { src: "oops-logo.png", name: "OOPs" },
        { src: "cn-logo.png", name: "Computer Networks" },
        { src: "algorithm-logo.png", name: "DSA" },
        { src: "os-logo.png", name: "Operating Systems" },
        { src: "api-logo.png", name: "APIs" },
        { src: "agile-logo.png", name: "Agile Methodology" }
    ]
    const skills3 = [
        { src: "sql-logo.png", name: "SQL" },
        { src: "nodejs-logo.png", name: "Node.js" },
        { src: "git-logo.png", name: "Git" },
        { src: "mongodb-logo.png", name: "MongoDB" },
        { src: "github-logo.png", name: "Github" },
        { src: "express-logo.png", name: "Express.js" },
    ]

    const [targetRef, isVisible] = useVisibility(0.5)

    return (
        <div id={id} ref={targetRef} className={`my-40 max-md:my-28 p-12 max-md:p-4 mx-auto max-w-3xl mx-auto flex flex-col items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 animate-fadeInUp' : 'opacity-0' }`}>
            <h1 className="text-3xl font-bold font-mono mb-4">Skills</h1>
            <p className="text-center text-zinc-400 font-[ubuntu] mb-8 max-md:text-base max-md:px-4">A collection of the key skills and technologies I've worked with</p>
            <Marquee autoFill pauseOnHover gradient className="max-md:scale-95">
                {skills1.map((image, index) => (
                    <SkillItem key={index} image={image.src} name={image.name} />
                ))}
            </Marquee>
            <Marquee autoFill pauseOnHover gradient direction="right" className="max-md:scale-95">
                {skills2.map((image, index) => (
                    <SkillItem key={index} image={image.src} name={image.name} />
                ))}
            </Marquee>
            <Marquee autoFill pauseOnHover gradient className="max-md:scale-95">
                {skills3.map((image, index) => (
                    <SkillItem key={index} image={image.src} name={image.name} />
                ))}
            </Marquee>
        </div>

    )
}
export default Skills