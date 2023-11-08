import useState from "react";
import BookForm from "./BookForm";
import Axios from "axios";

function CreateBook()
{
    const [arr, setArr] = useState([]); // arr = [Jungle Book, Rudyard Kipling, Children's Literature, 1]
    const getState = (childData) => { // childData = [Jungle Book, Rudyard Kipling, Children's Literature, 1]
        setArr(childData);
    } 

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {title: arr[0], author : arr[1], genre : arr[2], id : arr[3]};
        
        Axios.post("http://localhost:4000/bookRoute/create-book",data).then((res)=>{
            if (res.status === 200)
                alert("Record added successfully");
            else
                Promise.reject();
        }).catch((err)=>alert(err));
        event.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <BookForm getState={getState} titleValue="" authorValue="" genreValue="" idValue="">Create Book</BookForm>
        </form>
    )
}

export default CreateBook;