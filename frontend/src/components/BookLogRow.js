import Axios from "axios";
import { Link } from "react-router-dom";

function BookLogRow(props) 
{
    const { _id, title, author, genre, id } = props.obj; // Object destruction

    const handleClick = () => {
        Axios.delete("https://localhost:4000/bookRoute/delete-book/" + _id).then((res) => {
            if (res.status === 200) 
            {
                alert("Record deleted successfully");
                window.location.reload();
            }
            else
                Promise.reject();
        }).catch((err) => alert(err));
    }

    return (
        <tr>
            <td>{title}</td>
            <td>{author}</td>
            <td>{genre}</td>
            <td>{id}</td>
            <td class="d-flex justify-content-center">
                <Link class="text-decoration-none text-light me-4" to={"/edit-book/" + _id}>
                    <button class="btn btn-success">Edit</button>
                </Link>
                <button onClick={handleClick} class="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
}

export default BookLogRow;