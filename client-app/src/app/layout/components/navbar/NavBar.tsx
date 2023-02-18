import React from 'react';
import { useStore } from '../../../stores/store';
import navBarStyle from './NavBar.module.css';

export default function NavBar() {
    const { activityStore } = useStore();

    return (
        <nav className={navBarStyle.navBarContainer}>
            <a href="/index.html">
                {' '}
                <h1 className={navBarStyle.logo}>Logo</h1>
            </a>
            <ul className={navBarStyle.navBarMenuList}>
                <li className={navBarStyle.navBarMenuListItem} onClick={activityStore.closeForm}>
                    Activities
                </li>
                <li
                    className={navBarStyle.navBarMenuListBtn}
                    onClick={() => {
                        activityStore.cancelSelectedActivity();
                        activityStore.openForm();
                    }}
                >
                    Create Activity
                </li>
            </ul>
        </nav>
    );
}
