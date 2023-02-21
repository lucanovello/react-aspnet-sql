import NavBar from '../../features/navbar/NavBar';
import { observer } from 'mobx-react-lite';
import { Outlet } from 'react-router-dom';
import appStyle from './App.module.css';

function App() {
    return (
        <>
            <NavBar />
            <main className={appStyle.appContainer}>
                <Outlet />
            </main>
        </>
    );
}

export default observer(App);
