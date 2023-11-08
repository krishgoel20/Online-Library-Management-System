import { useEffect, useState } from "react";

function BookForm(props)
{
    const [title, setTitle] = useState(props.titleValue);
    const [author, setAuthor] = useState(props.authorValue);
    const [genre, setGenre] = useState(props.genreValue);
    const [id, setID] = useState(props.idValue);

    useEffect(()=>{
        setTitle(props.titleValue);
        setAuthor(props.authorValue);
        setGenre(props.genreValue);
        setID(props.idValue);
    },[props.titleValue,props.authorValue,props.genreValue,props.idValue]);

    const arr = [title, author, genre, id]; // [Jungle Book, Rudyard Kipling, Children's Literature, 1]

    const handleClick = () => {
        props.getState(arr);
    }

    return (
        <div style={{maxWidth: "40%", margin: "0px auto"}}>
            <input onChange={(event)=>setTitle(event.target.value)} class="form-control my-3" placeholder="Enter the Book Title: "></input>
            <input onChange={(event)=>setAuthor(event.target.value)} class="form-control my-3" placeholder="Enter the Book Author: "></input>
            <input onChange={(event)=>setGenre(event.target.value)} class="form-control my-3" placeholder="Enter the Book ID: "></input>
            <input onChange={(event)=>setID(event.target.value)} class="form-control my-3" placeholder="Enter the Book Genre/Domain: "></input>
            <button onClick={handleClick} class="btn btn-success my-3 d-block mx-auto" type="submit">Submit</button>
        </div>
    )
}

export default BookForm;