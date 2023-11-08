import { useParams } from "react-router-dom";
import BookForm from "./BookForm";
import { useEffect, useState } from "react";
import Axios from "axios";

function EditBook() 
{
    const { id } = useParams();
    const [initialValue, setInitialValue] = useState({ title: "", author: "", genre: "", id: "" });
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        Axios.get("https://localhost:4000/bookRoute/update-book" + id).then((res) => {
            if (res.status === 200) 
            {
                const { title, author, genre, id } = res.data;
                setInitialValue({ title, author, genre, id });
            }
            else
                Promise.reject();
        }).catch((err) => alert(err));
    }, [id])

    const getState = (childData) => {
        setNewData(childData);
    }

    const handleSubmit = () => {
        const data = { title: newData[0], author: newData[1], genre: newData[2], id: newData[3] };
        Axios.put("https://localhost:4000/bookRoute/update-book/" + id, data).then((res) => {
            if (res.status === 200)
                alert("Record updated successfully")
            else
                Promise.reject();
        }).catch((err) => alert(err));
    }

    return (
        <form onSubmit={handleSubmit}>
            <BookForm getState={getState} titleValue={initialValue.title} authorValue={initialValue.author} genreValue={initialValue.genre} idValue={initialValue.id}>Update Book</BookForm>
        </form>
    )
}

export default EditBook;