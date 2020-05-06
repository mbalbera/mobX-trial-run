// import React from 'react';
import React, { useContext } from "react";
import { StoreContext } from '../App'

function MovieList() {
    const store = useContext(StoreContext)
    return (
        <ul>
            {store.movies.map(movie=><li>{movie}</li>)}
        </ul>
    )
}
export default MovieList