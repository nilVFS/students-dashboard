import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Dashboard">Stats</Link></li>
                <li><a href="#">Schedule</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </header>
    )
}