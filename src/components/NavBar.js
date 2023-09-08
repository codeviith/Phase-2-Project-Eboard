import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/HallOfFame">Hall-of-Fame</NavLink>
            <NavLink to="/Search">Search</NavLink>
            <NavLink to="/New_Post">Add Post</NavLink>
        </nav>
    )
}

export default NavBar;