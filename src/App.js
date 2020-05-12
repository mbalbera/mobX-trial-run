import React from 'react';
import { useLocalStore } from 'mobx-react'
import MovieHeader from './components/MovieHeader'
import MovieList from './components/MovieList'
import AddMovie from './components/AddMovie'

export const StoreContext = React.createContext()

const StoreProvider = ({children}) => {
  const store = useLocalStore(() => ({
    movies: [
      {
        title: "The Shawshank Redemption",
        year: 1994,
        img:
          "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        summary:
          "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      },
      {
        title: "The Godfather",
        year: 1972,
        img:
          "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg",
        summary:
          "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      },
      {
        title: "Rocky",
        year: 1976,
        img:
          "https://images-na.ssl-images-amazon.com/images/I/61Z%2BoYoM6PL._AC_SY741_.jpg",
        summary:
          "A small-time boxer gets a supremely rare chance to fight a heavy-weight champion in a bout in which he strives to go the distance for his self-respect.",
      },
    ],
    addMovie: (movie) => {
      store.movies.push(movie);
    },
    get movieCount() {
      return store.movies.length;
    },
  }));
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}

function App() {
  return (
    <StoreProvider>
      <div style={{ marginRight: "10%", marginLeft: "10%", marginTop: "2%" }}>
        <MovieHeader />
        <MovieList />
        <div style={{marginTop: "2%" }}>
          <AddMovie />
        </div>
      </div>
    </StoreProvider>
  );
}

export default App;
