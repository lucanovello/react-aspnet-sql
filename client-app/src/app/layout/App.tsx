import { useEffect } from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './components/loading/LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
    const { activityStore } = useStore();

    useEffect(() => {
        activityStore.loadActivities();
    }, [activityStore]);

    if (activityStore.loadingInitial)
        return (
            <>
                <NavBar />
                <LoadingComponent text="Loading..." />
            </>
        );
    return (
        <>
            <NavBar />
            <ActivityDashboard />
        </>
    );
}

export default observer(App);
