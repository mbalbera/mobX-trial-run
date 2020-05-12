import React from "react";
import { StoreContext } from '../App'
import { Button, Form } from "semantic-ui-react";


function AddMovie() {

    const [title, setTitle ] = React.useState('')
    const [year, setYear] = React.useState('')
    const [img, setImg] = React.useState("");
    const [summary, setSummary] = React.useState("");
    const store = React.useContext(StoreContext)

    function handleSubmit (e){
        if (title.length > 0 && year.length === 4 && img.length > 0 && summary.length > 0) {
          store.addMovie({ title: title, year: year, img: img, summary: summary });
          setTitle("");
          setYear("");
          setSummary("");
          setImg("");
          e.preventDefault();
        }
    }
    return (
      <Form onSubmit={(e) => handleSubmit(e)}>
        <h3>Add a New Movie</h3>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Year</label>
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <label>Summary</label>
        <input
          type="text"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <label>Image URL</label>
        <input
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </Form>
    );

}
export default AddMovie