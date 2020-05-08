import React from "react";
import { StoreContext } from '../App'


function AddMovie() {

    const [title, setTitle ] = React.useState('')
    const [year, setYear] = React.useState('')
    const store = React.useContext(StoreContext)

    function handleSubmit (e){
        if (title.length > 0 && year.length === 4) {
            store.addMovie({ title: title, year: year })
            setTitle('')
            setYear('')
            e.preventDefault()
        }
    }
    return (
        <form onSubmit={e=>handleSubmit(e)}>
            <label>Input Movie</label>
            <br/>
            <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <br/>
            <input type='text' value={year} onChange={(e)=>setYear(e.target.value)}/>
            <br/>
            <input type='submit' value='submit'/>
        </form>
    )

}
export default AddMovie