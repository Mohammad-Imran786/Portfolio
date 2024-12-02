import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import useVisibility from '../../Hooks/useVisibility'

const Projects = ({ id }) => {
    const imgRef = useRef(null)
    const containerRef = useRef(null)

    const [targetRef, isVisible] = useVisibility(0.4)
    const [hoveredProject, setHoveredProject] = useState(null)

    const combinedRef = (elem) => {
        containerRef.current = elem;
        targetRef.current = elem;
    }

    const projectDetails = [
        {
            title: "CLOUD IDE",
            type: "Full Stack",
            image: "https://media.istockphoto.com/id/1305775928/photo/cloud-computing.webp?a=1&b=1&s=612x612&w=0&k=20&c=0lNjL_kfm8VWwzt3e_DMTrtrVoe3gVgT8kozLPHQzgI=",
            githubLink: "https://github.com/Mohammad-Imran786/Cloud-IDE"
        },
        {
            title: "CRUD App",
            type: "Backend",
            image: "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fHww",
            githubLink: "https://github.com/Mohammad-Imran786/Backend_project/"
        },
        {
            title: "PORTFOLIO",
            type: "Front-End",
            image: "https://images.unsplash.com/photo-1624225322900-690eab653586?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
            githubLink: "https://mohammad-imran786.github.io/Portfolio/"
        }
    ];

    const handleMouseEnter = (project) => {
        const imgDiv = imgRef.current;
        if (imgDiv) {
            imgDiv.style.backgroundImage = `url(${project.image})`;
            imgDiv.style.opacity = '1';
            imgDiv.style.visibility = 'visible';
            setHoveredProject(project);
        }
    };

    const handleMouseLeave = () => {
        const imgDiv = imgRef.current;
        if (imgDiv) {
            imgDiv.style.opacity = '0';
            imgDiv.style.visibility = 'hidden';
            setHoveredProject(null);
        }
    };

    return (
        <>
            <div
                ref={imgRef}
                className="w-[25vw] h-[30vw] bg-[80%] bg-cover bg-center rounded-xl fixed left-[51%] top-[20%] z-50 
                    transition-all duration-300 ease-in-out opacity-0 invisible"
            ></div>
            <div
                id={id}
                ref={combinedRef}
                className={`max-w-6xl mx-auto my-44 max-md:my-28 transition-all duration-1000 ${isVisible ? 'opacity-100 animate-fadeInUp' : 'opacity-0'
                    }`}
            >
                <li className="py-8 px-10 border-b-2 border-slate-100 text-slate-400 font-light">MY PROJECT GALLERY</li>

                {projectDetails.map((project, index) => (
                    <div
                        key={index}
                        className="group"
                        onMouseEnter={() => handleMouseEnter(project)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link
                            to={project.githubLink}
                            target="_blank"
                            className="block relative w-full h-40 border-b-2 border-slate-100 flex items-center px-10 overflow-hidden"
                        >
                            <div className="absolute left-0 w-full h-full bg-yellow-100 -translate-y-full transition-all duration-300 ease-in-out group-hover:translate-y-0 transition-transform duration-300 overflow-hidden">
                            </div>
                            <h1 className="relative z-5 text-5xl font-[ubuntu]">{project.title}</h1>
                            <p className="ml-auto text-zinc-400 z-10">{project.type}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Projects