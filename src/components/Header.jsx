import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Stats</Link></li>
                <li><Link to="/schedule">Schedule</Link></li>
                <li><a href="#">About</a></li>
            </ul>
        </header>
    )
}