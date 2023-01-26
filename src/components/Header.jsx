import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div>
                <img src="/icons/logo.svg" alt="" className="logo-img"/>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Stats</Link></li>
                <li><Link to="/schedule">Schedule</Link></li>
                <li><a href="#">About</a></li>
            </ul>
            <div className="notification-icons">
                <div className="notification">
                    <img src="/icons/notif-icon-1.svg" alt="" className="notification-icon" />
                    <div className="notification-count">1</div>
                </div>
                <div className="notification">
                    <img src="/icons/notif-icon-2.svg" alt="" className="notification-icon" />
                </div>
                <input type="search" placeholder="Search"/>
            </div>
        </header>
    )
}