import React from 'react';
import { useLocalStore } from 'mobx-react'
import MovieHeader from './components/MovieHeader'
import MovieList from './components/MovieList'
import AddMovie from './components/AddMovie'

export const StoreContext = React.createContext()

const StoreProvider = ({children}) => {
  const store = useLocalStore(()=>({
    movies: ['Toy Story', 'Up', 'Monsters Inc.'],
    addMovie : movie => {
      store.movies.push(movie)
    },
    get movieCount(){
      return store.movies.length
    }
  }))
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}

function App() {
  return (
    <StoreProvider>
      <MovieHeader />
      <MovieList />
      <AddMovie />
    </StoreProvider>
    )
}

export default App;
