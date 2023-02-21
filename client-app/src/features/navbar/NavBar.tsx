import { NavLink } from 'react-router-dom';
import navBarStyle from './NavBar.module.css';

export default function NavBar() {
    return (
        <nav className={navBarStyle.navBarContainer}>
            <NavLink to="/">
                <h1 className={navBarStyle.logo}>Logo</h1>
            </NavLink>
            <ul className={navBarStyle.navBarMenuList}>
                <NavLink to="/activities">
                    <li className={navBarStyle.navBarMenuListItem}>Activities</li>
                </NavLink>
                <NavLink to="/createactivity">
                    <li className={navBarStyle.navBarMenuListBtn}>Create Activity</li>
                </NavLink>
            </ul>
        </nav>
    );
}
