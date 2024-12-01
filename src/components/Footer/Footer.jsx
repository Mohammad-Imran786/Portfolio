import React from 'react'
import { IconBrandGithub, IconBrandTwitter, IconBrandLinkedin } from "@tabler/icons-react"

const socialLinks = [
    { link: "https://www.linkedin.com/in/01imran/", icon: IconBrandLinkedin },
    { link: "https://github.com/Mohammad-Imran786", icon: IconBrandGithub },
    { link: "https://x.com/Md_Imran_9", icon: IconBrandTwitter }
]

const Footer =() =>{

    const socialIcons = socialLinks.map((socialLink, index) => {
        return <a key={index} href={`${socialLink.link}`} target="_blank" className="font-mono text-lg hover:text-blue-500 hover:scale-105 transition transform duration-300 ease-in-out">
            <socialLink.icon stroke={1.5} size={25} />
        </a>
    })

    return <div className="mt-6 mb-16 flex flex-col gap-4 items-center">
        <div className="md:hidden flex text-zinc-500 gap-8 sm-mx:gap-6">{socialIcons}</div>
        <div className="text-zinc-400 text-xs sm:text-base font-thin flex items-center">Designed & Developed with ❤️. Mohammad Imran &copy; {new Date().getFullYear()} | All Rights Reserved.</div>
    </div>
}
export default Footer