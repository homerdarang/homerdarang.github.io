import React from 'react'

function AboutMe() {
    return (
        <>
            <div className='aboutme px-12 py-16 backdrop-blur md:bg-black/25 lg:bg-white/10 bg-white/15 rounded-3xl lg:w-5/6 lg:ms-auto text-teal-300 overflow-y-scroll scrollbox overflow-hidden'>
                <h2 className='lg:text-4xl md:text-2xl text-xl font-semibold'>About me</h2>
                <p className='font-light my-2 tracking-wide'>I am a self-taught Frontend Developer with a passion for creating intuitive and responsive user interfaces. My expertise includes proficiency in HTML, CSS, JavaScript, and ReactJs. I am committed to continuous learning and staying updated with the latest trends and technologies in web development.</p>
                <p className='font-light my-2 tracking-wide'>In addition to my frontend development skills, I have over a year of experience in IT Support, which has honed my ability to diagnose and resolve technical issues efficiently. This background enables me to bridge technical support and development roles, providing a unique perspective and a holistic approach to problem-solving.</p>
                <p className='font-light my-2 tracking-wide'>I design and code beautiful, simple things. I love simplicity and I love what I do. I am a proactive and motivated individual, dedicated to delivering high-quality, innovative solutions that enhance user experience..</p>
            </div>
        </>
    )
}

export default AboutMe