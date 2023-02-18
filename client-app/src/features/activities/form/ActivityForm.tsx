import { observer } from 'mobx-react-lite';
import { ChangeEvent, useState } from 'react';
import { useStore } from '../../../app/stores/store';
import ActivityDashboardButton from '../dashboard/button/ActivityDashboardButton';
import activityFormStyle from './ActivityForm.module.css';

export default observer(function ActivityForm() {
    const { activityStore } = useStore();
    const { createActivity, updateActivity } = activityStore;

    const initState = activityStore.selectedActivity ?? {
        id: '',
        title: '',
        date: '',
        description: '',
        category: '',
        city: '',
        venue: '',
    };

    const [activity, setActivity] = useState(initState);

    function handleSubmit() {
        activity.id ? updateActivity(activity) : createActivity(activity);
    }

    function handleInputChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setActivity({ ...activity, [name]: value });
    }

    return (
        <form
            className={activityFormStyle.activityFormContainer}
            onSubmit={handleSubmit}
            autoComplete="off"
        >
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
                <li className={activityFormStyle.activityFormListTextarea} data-name="description">
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

            <ActivityDashboardButton
                selectedActivity={activityStore.selectedActivity}
                btnSubmitText="Submit"
                btnCancelText="Cancel"
                btnColor="hsl(110, 80%, 30%)"
                handleSubmit={handleSubmit}
                handleCancel={activityStore.closeForm}
            />
        </form>
    );
});
