import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
// initial state
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// context provider
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watchED", JSON.stringify(state.watched));
  }, [state]);

  // actions
  const addAnimeToWatchlist = (anime) => {
    dispatch({ type: "ADD_ANIME_TO_WATCHLIST", payload: anime });
  };

  const removeAnimefromWatchlist = (mal_id)=>{
    dispatch({type: "REMOVE_ANIME_FROM_WATCHLIST", payload:mal_id})
  }

  const addAnimetoWatched = (anime) => {
    dispatch({ type: "ADD_ANIME_TO_WATCHED", payload:anime})
  }

  const removeAnimefromWatched = (mal_id)=>{
    dispatch({type : "REMOVE_ANIME_FROM_WATCHED", payload:mal_id})
  }

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addAnimeToWatchlist,
        removeAnimefromWatchlist,
        addAnimetoWatched,
        removeAnimefromWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
