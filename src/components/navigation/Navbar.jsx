import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav>
                <div className='nav--div lg:top-28 md:top-24 sm:top-20 top-16 flex flex-row gap-10  mb-7 md:mt-3'>
                    <Link to={'/contact'} className='outline-none '>
                        <p className='text-gray-800 font-medium text-xl border rounded-full py-8 px-10 bg-yellow-400 active:scale-95 outline-none transition-all ease-linear'>
                            Hire Me!
                        </p>
                    </Link>
                </div>
            </nav >
            <Outlet />
        </>
    )
}

export default Navbar