import React from 'react';
import { useLocalStore, observer} from 'mobx-react'
import MovieHeader from './components/MovieHeader'
import MovieList from './components/MovieList'

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
    </StoreProvider>
    )
}

export default App;
