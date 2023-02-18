import { useState } from 'react';
import { Activity } from '../../../../app/models/activity';
import activityDashboardButtonStyle from './ActivityDashboardButton.module.css';

interface Props {
    selectedActivity?: Activity;
    btnSubmitText: string;
    btnCancelText: string;
    btnColor: string;
    handleSubmit: (id: string) => void;
    handleCancel: () => void;
}

export default function ActivityList({
    selectedActivity,
    btnSubmitText,
    btnCancelText,
    btnColor,
    handleSubmit,
    handleCancel,
}: Props) {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div className={activityDashboardButtonStyle.activityDashboardBtnContainer}>
            <button
                className={activityDashboardButtonStyle.activityDashboardBtnCancel}
                onClick={handleCancel}
            >
                {btnCancelText}
            </button>
            <button
                type="submit"
                className={activityDashboardButtonStyle.activityDashboardBtnSubmit}
                style={{
                    color: isHovering ? 'white' : btnColor,
                    borderColor: btnColor,
                    background: isHovering ? btnColor : 'white',
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={() => selectedActivity && handleSubmit(selectedActivity.id)}
            >
                {btnSubmitText}
            </button>
        </div>
    );
}
