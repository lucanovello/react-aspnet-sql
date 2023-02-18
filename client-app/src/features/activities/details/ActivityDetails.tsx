import { Activity } from '../../../app/models/activity';
import { useStore } from '../../../app/stores/store';
import ActivityDashboardButton from '../dashboard/button/ActivityDashboardButton';
import activityDetailsStyle from './ActivityDetails.module.css';

interface Props {
    activity: Activity;
}

export default function ActivityDetails({ activity }: Props) {
    const { activityStore } = useStore();
    const { openForm, cancelSelectedActivity } = activityStore;

    return (
        <div className={activityDetailsStyle.activityDetailsContainer}>
            <div className={activityDetailsStyle.activityDetailsImageWrapper}>
                <img
                    className={activityDetailsStyle.activityDetailsImage}
                    src={`/assets/categoryImages/${activity.category}.jpg`}
                    alt={activity.category}
                />
            </div>
            <div className={activityDetailsStyle.activityDetailsTextWrapper}>
                <h2 className={activityDetailsStyle.activityDetailsTitle}>{activity.title}</h2>
                <p className={activityDetailsStyle.activityDetailsDate}>{activity.date}</p>
                <div className={activityDetailsStyle.activityDetailsDescWrapper}>
                    <p className={activityDetailsStyle.activityDetailsDesc}>
                        {activity.description}
                    </p>
                    <p className={activityDetailsStyle.activityDetailsDesc}>
                        {activity.city}, {activity.venue}
                    </p>
                    <ActivityDashboardButton
                        selectedActivity={activity}
                        btnSubmitText="Edit"
                        btnCancelText="Close"
                        btnColor="hsl(210, 70%, 55%)"
                        handleSubmit={openForm}
                        handleCancel={cancelSelectedActivity}
                    />
                </div>
            </div>
        </div>
    );
}
