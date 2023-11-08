import { Link } from "react-router-dom";

function Nav()
{
    return (
        <nav class="navbar bg-warning">
            <Link style={{fontFamily: "Agbalumo"}} to="/" class="navbar-brand mx-3">CRUD Operations</Link>
            <div class="nav">
                <Link to="/create-book" class="nav-link">Create Book</Link>
                <Link to="/book-log" class="nav-link">Book Log</Link>
            </div>
        </nav>
    )
}

export default Nav;