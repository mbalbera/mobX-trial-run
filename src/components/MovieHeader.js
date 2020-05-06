import React, { useContext } from "react";
import { StoreContext } from '../App'

function MovieHeader(){
    const store = useContext(StoreContext)
    return (
        <div>
            <p>{store.movies.length === 1 ? `${store.movies.length} movie` : `${store.movies.length} movies`}</p>
        </div>
    )
}
export default MovieHeader