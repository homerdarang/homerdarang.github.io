import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import PageNotFoundImg from '../assets/404.jpg';

function PageNotFound() {
    const navigate = useNavigate();
    return (
        <>
            <div className='absolute left-0 right-0 lg:top-1/4 md:top-1/4 top-20 text-center '>
                <img className='md:w-80 w-2/5 m-auto' src={PageNotFoundImg} alt='page not found vector image' />
                <p className='md:text-2xl md:font-semibold font-base text-lg lg:px-2 px-9'>Sorry, Page is either under maintenance or not found!</p>
                <div className='text-blue-600'>
                    <div className='my-6 hover:underline'>
                        <Link to='/'>Go To Home Page</Link>
                    </div>
                    <button className='hover:underline' onClick={() => navigate(-1)} >
                        Go Back
                    </button>
                </div>
            </div>
        </>
    )
}

export default PageNotFound