import React, { useContext } from "react";
import { StoreContext } from '../App'
import { useObserver } from 'mobx-react'


function MovieList() {
    const store = useContext(StoreContext)
    return useObserver(()=>(
        <ul>
            {store.movies.map(movie=>(
                <li key={movie}>{movie}</li>
            ))}
        </ul>
    ))
}
export default MovieList