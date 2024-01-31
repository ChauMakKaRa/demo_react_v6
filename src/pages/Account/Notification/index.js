import clsx from 'clsx';
import styles from './Notification.module.scss';
function Notification() {
    return (
        <div className={clsx(styles.notification_page)}>
            <div className={clsx(styles.no_content)}>Trang thong bao</div>
            <div></div>
        </div>
    );
}

export default Notification;
