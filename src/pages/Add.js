import React, { useState } from 'react'
import { Resultcard } from '../components/Resultcard';

export const Add = () => {

    const [query, setQuery] = useState("")
    const [results, setResults] = useState([]);

    const onChange = e => {
        e.preventDefault();
        setQuery(e.target.value);
    }

    const searchAnime = () => {
        fetch(`https://api.jikan.moe/v4/anime?q=${query}`)
            .then(res => res.json())
            .then(data => {
                if (!data.errors) {
                    setResults(data.data);
                } else {
                    setResults([]);
                }
            })
    }

    return (
        <div className="px-4">
            <div className=' flex flex-col justify-center items-center'>
                <h2 className='text-3xl font-bold mb-4 mt-8 text-white'>Add Animes</h2>
                <input type='text'
                    placeholder='Search for Anime'
                    value={query}
                    onChange={onChange}
                    onKeyPress={(e) => e.key === 'Enter' && searchAnime()}
                    className='bg-zinc-900 focus:outline-none focus:border-sky-500 text-white rounded-md px-4 py-2 md:py-4 w-full md:w-1/2'></input>

                <button
                    className='bg-pink-600 px-8 py-2 text-white md:text-2xl rounded-md mt-8 mb-8 hover:bg-pink-700'
                    onClick={searchAnime}>Search</button>
            </div>

            {results && results.length > 0 && (
                <div className='w-full flex justify-center items-center'>
                    <ul className='results grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4  '>
                        {results.map(anime => (
                            <li key={anime.mal_id}>
                                
                                    <Resultcard anime={anime} />
                                

                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
