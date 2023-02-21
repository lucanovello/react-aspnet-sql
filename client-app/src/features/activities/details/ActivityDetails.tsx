import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../loading/LoadingComponent';
import activityDetailsStyle from './ActivityDetails.module.css';

interface Props {
    hideBtns?: boolean;
}

export default observer(function ActivityDetails({ hideBtns }: Props) {
    const { activityStore } = useStore();
    const { selectedActivity: activity, loadActivity } = activityStore;
    const { id } = useParams();

    useEffect(() => {
        if (id) loadActivity(id);
        console.log(hideBtns);
    }, [id, loadActivity, hideBtns]);

    if (!activity) return <LoadingComponent />;

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
                    {!hideBtns && (
                        <div className={activityDetailsStyle.activityDetailsBtnContainer}>
                            <div className={activityDetailsStyle.activityDetailsBtnWrapper}>
                                <Link
                                    to={'/activities'}
                                    className={activityDetailsStyle.activityDetailsBtnCancel}
                                >
                                    {'Back'}
                                </Link>
                                <Link
                                    to={`/manage/${activity.id}`}
                                    type="submit"
                                    className={activityDetailsStyle.activityDetailsBtnSubmit}
                                >
                                    {'Edit'}
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
});
