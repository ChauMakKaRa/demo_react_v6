import clsx from 'clsx';
import styles from './Notifications.module.scss';
import { useState } from 'react';
import axios from 'axios';

function Notifications() {
    const [notification, setNotification] = useState('');
    const [isPrivate, setIsPrivate] = useState(false);

    const sendNotification = async () => {
        try {
            const notificationType = isPrivate ? 'private' : 'public';
            await axios.post('/api/sendNotification', { notification, notificationType });
            alert('Notification sent successfully');
        } catch (error) {
            console.error('Error sending notification', error);
            alert('Failed to send notification');
        }
    };
    return (
        <div className={clsx(styles.wrapper)}>
            <div className="container mt-5">
                <h2>Admin Notification Page</h2>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        value={notification}
                        onChange={(e) => setNotification(e.target.value)}
                        placeholder="Enter notification message"
                    />
                </div>
                <div className="form-check mb-3">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="privateCheck"
                        checked={isPrivate}
                        onChange={() => setIsPrivate(!isPrivate)}
                    />
                    <label className="form-check-label" htmlFor="privateCheck">
                        Private Notification
                    </label>
                </div>
                <button onClick={sendNotification} className="btn btn-primary">
                    Send Notification
                </button>
            </div>
        </div>
    );
}

export default Notifications;
