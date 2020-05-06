import React from "react";
import { StoreContext } from '../App'


function AddMovie() {

    const [movie, setMovie] = React.useState('')
    const store = React.useContext(StoreContext)

    return (
        <form onSubmit={e=>{
            store.addMovie(movie)
            setMovie('')
            e.preventDefault()
            }}
        >
            <label>Input Movie</label>
            <br/>
            <input type='text' value={movie} onChange={(e)=>setMovie(e.target.value)}/>
            <br/>
            <input type='submit' value='submit'/>
        </form>
    )

}
export default AddMovie