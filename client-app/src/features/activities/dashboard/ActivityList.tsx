import { observer } from 'mobx-react-lite';
import { useStore } from '../../../app/stores/store';
import activityListStyle from './ActivityList.module.css';

export default observer(function ActivityList() {
    const { activityStore } = useStore();
    const { activitiesByDate, selectedActivity, selectActivity, closeForm, deleteActivity } =
        activityStore;

    return (
        <ul className={activityListStyle.activityListContainer}>
            {activitiesByDate.map((activity) => (
                <li key={activity.id} className={activityListStyle.activityListItemContainer}>
                    <div className={activityListStyle.activityListItemImageWrapper}>
                        <img
                            className={activityListStyle.activityListItemImage}
                            src={`/assets/categoryImages/${activity.category}.jpg`}
                            alt={activity.category}
                        />
                    </div>
                    <div className={activityListStyle.activityListItemDetailsWrapper}>
                        <h2 className={activityListStyle.activityListItemTitle}>
                            {activity.title}
                        </h2>
                        <p className={activityListStyle.activityListItemDate}>{activity.date}</p>
                        <div className={activityListStyle.activityListItemDesc}>
                            <p>{activity.description}</p>
                            <p>
                                {activity.city}, {activity.venue}
                            </p>
                        </div>
                        <div className={activityListStyle.activityListItemCategoryWrapper}>
                            <p className={activityListStyle.activityListItemCategory}>
                                {activity.category}
                            </p>
                            <div className={activityListStyle.activityListItemBtnWrapper}>
                                <button
                                    className={activityListStyle.activityListItemBtnDelete}
                                    onClick={() => deleteActivity(activity.id)}
                                >
                                    Delete
                                </button>
                                <button
                                    className={activityListStyle.activityListItemBtnView}
                                    onClick={() => {
                                        selectedActivity?.id !== activity.id && closeForm();
                                        selectActivity(activity.id);
                                    }}
                                >
                                    View
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
});
