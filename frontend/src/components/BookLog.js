import Axios from "axios";
import { useEffect, useState } from "react";
import BookLogRow from "./BookLogRow";

function BookLog()
{
    const [arr, setArr] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:4000/bookRoute/").then((res) => {
            if (res.status === 200)
            {
                setArr(res.data);
            }
            else
            {
                return Promise.reject();
            }
        }).catch((err) => alert(err));
    },[]);

    const ListItems = () => {
        return arr.map((val,ind)=>{  // [{_id,title,author,genre,id},{},{},{}]
            return <BookLogRow obj={val}/>
        })
    }

    return (
        <table style={{maxWidth:"60%", margin: "50px auto"}} class="table table-bordered table-striped table-success">
            <thead>
                <tr>
                    <th class="text-center">Title</th>
                    <th class="text-center">Author</th>
                    <th class="text-center">Genre</th>
                    <th class="text-center">ID</th>
                </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
    )
}

export default BookLog;