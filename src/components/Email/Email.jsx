import React from 'react'

const Mail = () => {
    return <div className="flex hidden md:flex text-zinc-400 items-center gap-6 fixed bottom-32 -right-40 rotate-90">
        <div className="flex" data-aos-duration="800" data-aos="fade-down-left">
            <a href="mailto:786.meimran@gmail.com" className="tracking-wide text-thin hover:text-blue-500 hover:-translate-x-1 transition transform duration-300 ease-in-out">
                786.meimran@gmail.com
            </a>
        </div>
        <hr className="border w-40 rounded-full bg-zinc-400 border-zinc-400" />
    </div>
}
export default Mail