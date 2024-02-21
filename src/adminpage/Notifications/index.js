import clsx from 'clsx';
import styles from './Notifications.module.scss';
import { useState } from 'react';

function Notifications() {
    const [notification, setNotification] = useState('');

    const sendNotification = async () => {};
    return (
        <div className={clsx(styles.wrapper)}>
            <div className="container mt-5">
                <h2>Quản lý gửi thông báo</h2>
                <div className={clsx(styles.form)}>
                    <div className={clsx(styles.form_group, 'form-group')}>
                        <textarea
                            className={clsx(styles.form_control, 'form-control')}
                            value={notification}
                            onChange={(e) => setNotification(e.target.value)}
                            placeholder="Enter notification message"
                        />
                    </div>
                    <button onClick={sendNotification} className={clsx(styles.btn, 'btn btn-primary')}>
                        Gửi thông báo
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Notifications;
