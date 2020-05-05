import React from 'react';

function MovieList() {
    const store = React.useContext(StoreContext)
    return (
        <ul>
            {store.movies.map(movie=><li>{movie}</li>)}
        </ul>
    )
}
export default MovieList