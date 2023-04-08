import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalstate";

export const Resultcard = ({ anime }) => {

  const { addAnimeToWatchlist, watchlist } = useContext(GlobalContext)

  let storedAnime = watchlist.find(o => o.mal_id === anime.mal_id)
  const watchlistDisabled = storedAnime ? true : false;

  let URL = anime.images.jpg.large_image_url;
  return (
    <div className="w-72 min-h-[35rem]  rounded-lg  p-4 bg-zinc-900 flex flex-col justify-around items-center">
      <a href={anime.url} target="_blank" rel="noopener noreferrer">
        <img
          className="w-56 h-auto rounded-xl shadow-lg "
          src={URL}
          alt={`${anime.title} Poster`}
        />
      </a>

      <h3 className="text-white text-xl font-semibold mt-4 ">{anime.title}</h3>
      <div className="flex w-full justify-center items-center  ">
        {anime.aired.from ? (
          <h3 className="text-white text-base font-semibold   rounded-md mt-4 w-full">
            Year : {anime.aired.from.substring(0, 4)}
          </h3>
        ) : (
          <h3 className="text-white text-base font-semibold   rounded-md mt-4 w-full">
            Unknown Year
          </h3>
        )}

        {anime.episodes ? (
          <h3 className="text-white text-base  rounded-md mt-4 w-full">
            Episodes : {anime.episodes}
          </h3>
        ) : (
          <h3 className="text-white text-base    rounded-md mt-4 w-full">
            Episodes : No data{" "}
          </h3>
        )}
      </div>

      <div className="flex flex-col w-full  justify-start text-center">
        {watchlistDisabled ? (
          <button
            disabled={watchlistDisabled}
            onClick={() => addAnimeToWatchlist(anime)}
            className="text-white disabled:bg-zinc-600 disabled:cursor-not-allowed text-base mr-4 bg-indigo-600 hover:bg-indigo-800 px-2 py-3 rounded-md mt-4 w-full">
            Already added
          </button>
          ): (
            <button
              disabled={watchlistDisabled}
              onClick={() => addAnimeToWatchlist(anime)}
              className="text-white disabled:bg-zinc-400 disabled:cursor-not-allowed text-base mr-4 bg-indigo-600 hover:bg-indigo-800 px-2 py-3 rounded-md mt-4 w-full">
              Add to watch list
            </button>
          )}
        
      </div>
    </div>
  );
};
