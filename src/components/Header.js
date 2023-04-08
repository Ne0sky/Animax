import React from 'react'
import { Link } from 'react-router-dom'



export const Header = () => {
    return (
        <nav className='min-w-screen h-16 bg-indigo-900 text-white flex flex-row  items-center sticky top-0'>
            <div className='px-4 md:px-16 w-full flex justify-between'>
                <div className='container_logo'>
                    <Link to="/" className='text-xl md:text-3xl font-bold text-pink-400'>Animax</Link>
                </div>



                <div className='flex items-center justify-end md:justify-around w-5/6 md:w-3/4 md:text-xl '>
                    <div className='ml-4'>
                        <Link to="/add" className='bg-pink-600 px-3 py-2 rounded-lg hover:bg-pink-700 cursor-pointer' >add</Link>
                    </div>
                    <div >
                        <Link to="/" className='ml-4 border border-indigo-50 rounded-lg px-1 py-1 md:px-3 cursor-pointer hover:bg-indigo-950'>watchlist</Link>
                    </div>
                    <div >
                        <Link to="/watched" className='ml-4 border border-indigo-50 rounded-lg px-1 py-1 md:px-3 cursor-pointer hover:bg-indigo-950' >watched</Link>
                    </div>


                </div>
            </div>
        </nav>
    )
}
