import { observer } from 'mobx-react-lite';
import { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Activity } from '../../../app/models/activity';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../loading/LoadingComponent';
import ActivityDetails from '../details/ActivityDetails';
import activityFormStyle from './ActivityForm.module.css';
import { v4 as uuid } from 'uuid';

export default observer(function ActivityForm() {
    const { activityStore } = useStore();
    const { createActivity, updateActivity, loadActivity, loadingInitial } = activityStore;

    const { id } = useParams();
    const navigate = useNavigate();

    const [activity, setActivity] = useState<Activity>({
        id: '',
        title: '',
        date: '',
        description: '',
        category: '',
        city: '',
        venue: '',
    });

    useEffect(() => {
        if (id) loadActivity(id).then((activity) => setActivity(activity!));
    }, [id, loadActivity]);

    function handleSubmit() {
        if (!activity.id) {
            activity.id = uuid();
            createActivity(activity).then(() => navigate(`/activities/${activity.id}`));
        } else {
            updateActivity(activity).then(() => navigate(`/activities/${activity.id}`));
        }
    }

    function handleInputChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setActivity({ ...activity, [name]: value });
    }

    if (loadingInitial) return <LoadingComponent text="Loading activity..." />;

    return (
        <form
            className={activityFormStyle.activityFormContainer}
            onSubmit={handleSubmit}
            autoComplete="off"
        >
            {activity.id !== '' && (
                <ActivityDetails hideBtns={true} />
                // <div className={activityFormStyle.activityFormImageWrapper}>
                //     <img
                //         className={activityFormStyle.activityFormImage}
                //         src={`/assets/categoryImages/${activity.category}.jpg`}
                //         alt={activity.category}
                //     />
                // </div>
            )}
            <div className={activityFormStyle.activityFormWrapper}>
                <ul className={activityFormStyle.activityFormList}>
                    <li className={activityFormStyle.activityFormListInput} data-name="title">
                        <input
                            className={activityFormStyle.activityFormInput}
                            type={'text'}
                            placeholder="Title"
                            value={activity.title}
                            name="title"
                            onChange={handleInputChange}
                        ></input>
                        <label
                            className={
                                activity.title !== ''
                                    ? activityFormStyle.activityFormInputLabelUp
                                    : activityFormStyle.activityFormInputLabelDown
                            }
                            htmlFor="title"
                        >
                            Title
                        </label>
                    </li>
                    <li
                        className={activityFormStyle.activityFormListTextarea}
                        data-name="description"
                    >
                        <textarea
                            className={activityFormStyle.activityFormTextarea}
                            placeholder="Description"
                            value={activity.description}
                            name="description"
                            onChange={handleInputChange}
                        ></textarea>
                        <label
                            className={
                                activity.description !== ''
                                    ? activityFormStyle.activityFormInputLabelUp
                                    : activityFormStyle.activityFormInputLabelTextareaDown
                            }
                            htmlFor="description"
                        >
                            Description
                        </label>
                    </li>
                    <li className={activityFormStyle.activityFormListInput} data-name="category">
                        <input
                            className={activityFormStyle.activityFormInput}
                            type={'text'}
                            placeholder="Category"
                            value={activity.category}
                            name="category"
                            onChange={handleInputChange}
                        ></input>
                        <label
                            className={
                                activity.category !== ''
                                    ? activityFormStyle.activityFormInputLabelUp
                                    : activityFormStyle.activityFormInputLabelDown
                            }
                            htmlFor="category"
                        >
                            Category
                        </label>
                    </li>
                    <li className={activityFormStyle.activityFormListInput} data-name="date">
                        <input
                            className={activityFormStyle.activityFormInput}
                            type={'date'}
                            placeholder="Date"
                            value={activity.date}
                            name="date"
                            onChange={handleInputChange}
                        ></input>
                        <label
                            className={
                                activity.date !== ''
                                    ? activityFormStyle.activityFormInputLabelUp
                                    : activityFormStyle.activityFormInputLabelDown
                            }
                            htmlFor="date"
                        >
                            Date
                        </label>
                    </li>
                    <li className={activityFormStyle.activityFormListInput} data-name="city">
                        <input
                            className={activityFormStyle.activityFormInput}
                            type={'text'}
                            placeholder="City"
                            value={activity.city}
                            name="city"
                            onChange={handleInputChange}
                        ></input>
                        <label
                            className={
                                activity.city !== ''
                                    ? activityFormStyle.activityFormInputLabelUp
                                    : activityFormStyle.activityFormInputLabelDown
                            }
                            htmlFor="city"
                        >
                            City
                        </label>
                    </li>
                    <li className={activityFormStyle.activityFormListInput} data-name="venue">
                        <input
                            className={`${activityFormStyle.activityFormInput} ${activityFormStyle.activityFormInputDate}`}
                            type={'text'}
                            placeholder="Venue"
                            value={activity.venue}
                            name="venue"
                            onChange={handleInputChange}
                        ></input>
                        <label
                            className={
                                activity.venue !== ''
                                    ? activityFormStyle.activityFormInputLabelUp
                                    : activityFormStyle.activityFormInputLabelDown
                            }
                            htmlFor="venue"
                        >
                            Venue
                        </label>
                    </li>
                </ul>
                <div className={activityFormStyle.activityFormBtnContainer}>
                    <div className={activityFormStyle.activityFormBtnWrapper}>
                        <Link
                            to={`/activities/${activity.id}`}
                            className={activityFormStyle.activityFormBtnCancel}
                        >
                            {'Back'}
                        </Link>
                        <Link
                            to={`/activities/${activity.id}`}
                            type="submit"
                            className={activityFormStyle.activityFormBtnSubmit}
                            onClick={handleSubmit}
                        >
                            {'Submit'}
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    );
});
