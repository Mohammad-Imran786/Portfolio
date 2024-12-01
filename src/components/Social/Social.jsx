import { IconBrandGithub, IconBrandTwitter, IconBrandLinkedin } from "@tabler/icons-react"
import React from 'react'

const socialLinks = [
    { link: "https://www.linkedin.com/in/01imran/", icon: IconBrandLinkedin },
    { link: "https://github.com/Mohammad-Imran786", icon: IconBrandGithub },
    { link: "https://x.com/Md_Imran_9", icon: IconBrandTwitter }
]

const Social = () => {

    const socialIcons = socialLinks.map((socialLink, index) => {
        return <a key={index} href={`${socialLink.link}`} target="_blank" className="font-mono text-lg hover:text-blue-500 hover:-translate-x-1 transition transform duration-300 ease-in-out">
            <div data-aos="fade-up-left" data-aos-duration="800">
                <socialLink.icon stroke={1.5} className="-rotate-90" size={25} />
            </div>
        </a>
    })

    return <div className="flex hidden md:flex text-zinc-400 items-center gap-8 fixed bottom-32 -left-28 rotate-90 " >
        {socialIcons}
        <hr className="border w-28 rounded-full bg-zinc-400 border-zinc-400" />
    </div>
}
export default Social;