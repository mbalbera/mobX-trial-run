import React from 'react';

class AddMovie extends React.Component{
    state = { newMovie: '' }

    setMovie = (e) =>{
        this.setState({newMovie:e.target.value})
    }
    render(){
        return (
            <form onSubmit={e=>e.preventDefault()}>
                <label>Input Movie</label>
                <input type='text' value={this.state.newMovie} onChange={(e)=>this.setMovie(e)}/>
                <input type='submit' value='submit'/>
            </form>
        )
    }
}
export default AddMovie