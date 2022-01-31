import {Link} from "react-router-dom";
import "./MainNav.scss";

export const MainNav = () => {
    return (
        <header className={"header"}>
            <div className={"logo"}>Learn React</div>
            <nav>
                <ul>
                    <li><Link to={"/"}>All Meets</Link></li>
                    <li><Link to={"/favorites"}>Favorites Meets</Link></li>
                    <li><Link to={"/new-meet"}>Create a New Meet</Link></li>
                </ul>
            </nav>
        </header>
    )
}