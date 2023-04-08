import React from 'react'
import { Moviecontrols } from './Moviecontrols';

export const Animecard = ({anime,type}) => {
    let URL = anime.images.jpg.large_image_url;
    return (
        <div className="w-72 min-h-[30rem]  rounded-lg  p-4 bg-zinc-900 flex flex-col justify-around items-center">
          <a href={anime.url} target="_blank" rel="noopener noreferrer">
            <img
              className="w-56 h-auto rounded-xl shadow-lg "
              src={URL}
              alt={`${anime.title} Poster`}
            />
          </a>
    
          <h3 className="text-white text-xl font-semibold mt-4 ">{anime.title}</h3>
          
          <div className="flex flex-col w-full  justify-start text-center">
            
             
              <Moviecontrols  anime={anime} type={type}/>
            
          </div>
        </div>
      );
}
