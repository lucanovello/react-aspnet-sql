import { observer } from 'mobx-react-lite';
import { useStore } from '../../../app/stores/store';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import activityDashboardStyle from './ActivityDashboard.module.css';
import ActivityList from './ActivityList';

export default observer(function ActivityDashboard() {
    const { activityStore } = useStore();

    return (
        <main className={activityDashboardStyle.activityDashboardContainer}>
            <div className={activityDashboardStyle.activityDashboardLeft}>
                <ActivityList />
            </div>

            <div className={activityDashboardStyle.activityDashboardRight}>
                {activityStore.selectedActivity && (
                    <ActivityDetails activity={activityStore.selectedActivity} />
                )}
                {activityStore.editMode && <ActivityForm />}
            </div>
        </main>
    );
});
