import React, { useContext } from 'react'
import { GlobalContext } from '../context/Globalstate'
import { AiFillEye } from "react-icons/ai"
import { AiFillDelete } from "react-icons/ai"

export const Moviecontrols = ({ anime, type }) => {
    const { removeAnimefromWatchlist, addAnimetoWatched, removeAnimefromWatched } = useContext(GlobalContext)
    return (
        <div>
            {type === 'watchlist' && (
                <div className='my-4'>
                    <button
                        onClick={() => addAnimetoWatched(anime)}
                        className='text-white text-2xl px-4 py-1 hover:bg-pink-800 bg-pink-600 mx-4 rounded-lg'>
                        <AiFillEye />
                    </button>


                    <button
                        onClick={() => removeAnimefromWatchlist(anime.mal_id)}
                        className='text-white text-2xl px-4 py-1 hover:bg-pink-800 bg-pink-600 mx-4 rounded-lg'>
                        <AiFillDelete />
                    </button>
                </div>
            )}

            {type === 'watched' && (
                <>
                <button
                        onClick={() => removeAnimefromWatched(anime.mal_id)}
                        className='text-white text-2xl px-4 py-1 hover:bg-pink-800 bg-pink-600 mx-4 rounded-lg'>
                        <AiFillDelete />
                    </button>
                </>
            )}


        </div>
    )
}
