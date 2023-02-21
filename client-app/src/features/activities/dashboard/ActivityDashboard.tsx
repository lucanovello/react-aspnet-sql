import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../loading/LoadingComponent';
import activityDashboardStyle from './ActivityDashboard.module.css';
import ActivityList from './ActivityList';

export default observer(function ActivityDashboard() {
    const { activityStore } = useStore();
    const { loadActivities, activityRegistry, loadingInitial } = activityStore;

    useEffect(() => {
        if (activityRegistry.size === 0) loadActivities();
    }, [loadActivities, activityRegistry.size]);

    if (loadingInitial)
        return (
            <>
                <LoadingComponent text="Loading..." />
            </>
        );

    return (
        <main className={activityDashboardStyle.activityDashboardContainer}>
            <div className={activityDashboardStyle.activityDashboardLeft}>
                <ActivityList />
            </div>

            <div className={activityDashboardStyle.activityDashboardRight}>
                <h4>{'Activity Filters >'}</h4>
            </div>
        </main>
    );
});
