import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalstate";
import { Animecard } from "../components/Animecard";
import { Link } from "react-router-dom";

export const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <>
      <div className="flex items-center justify-center w-full my-4">
        <h3 className="  text-white text-3xl font-semibold mb-4">
          Watched Movies
        </h3>
      </div>

      <div className=" w-full flex justify-center items-center">
        {watched.length >0 ?(
          <ul className="results grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4  ">
          {watched.map((anime) => (
            <li key={anime.mal_id}>
              <Animecard anime={anime} type="watched" />
            </li>
          ))}
        </ul>
        ): (
          <h2 className="text-white">No movies in your list! <Link className="bg-pink-600 rounded-lg px-4 py-2 ml-2" to='/add'>Add Some !</Link></h2>
          
        )}
        
      </div>
    </>
  );
};