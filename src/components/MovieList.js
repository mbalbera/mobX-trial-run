import React, { useContext } from "react";
import { StoreContext } from '../App'
import { useObserver } from 'mobx-react'
import MovieCard from './MovieCard'
import { Card  } from "semantic-ui-react";


function MovieList() {
    const store = useContext(StoreContext)
    return useObserver(()=>(
        <Card.Group columns='4'> 
            {store.movies.map(movie=>(
                <MovieCard key={movie} title={movie.title} year={movie.year} img={movie.img} summary= {movie.summary}/>
            ))}
         </Card.Group> 
    ))
}
export default MovieList