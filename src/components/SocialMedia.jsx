import React from 'react';

// import icons from './SocialIcons';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa6";
// import { FaFacebook } from "react-icons/fa6";

function SocialMedia() {

    // console.log(icons)
    // const allIcons = icons.map((icn) => {

    //     console.log(`${icn.icon} ${icn.link}`)
    // })

    return (
        <>
            <div className='flex flex-row gap-8 text-3xl text-slate-300 my-4 cursor pointer'>
                <a className='active:scale-95 outline-none hover:text-slate-100 transition-all ease-linear' href='https://github.com/homerdarang' target='_blank' rel='noreferrer' >{<FaGithub />}</a>
                <a className='active:scale-95 outline-none hover:text-slate-100 transition-all ease-linear' href='https://www.linkedin.com/in/homer-darang-a39a2628a/' target='_blank' rel='noreferrer'>{<FaLinkedin />}</a>
                <a className='active:scale-95 outline-none hover:text-slate-100 transition-all ease-linear' href='https://join.skype.com/invite/n89927b6q001' target='_blank' rel='noreferrer'>{<FaSkype />}</a>
            </div>
        </>
    )
}

export default SocialMedia