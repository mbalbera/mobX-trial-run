import React, { useContext } from "react";
import { StoreContext } from '../App'
import { useObserver } from 'mobx-react'
import { Header } from "semantic-ui-react";

function MovieHeader(){
    const store = useContext(StoreContext)
    return useObserver(() => ((
        <Header style={{marginBottom:'2%'}}>
            <h3>{store.movies.length === 1 ? `Your ${store.movies.length} favorite movie` : ` Your ${store.movies.length} favorite movies`}</h3>
        </Header>
    )))
}
export default MovieHeader