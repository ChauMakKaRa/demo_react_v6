import clsx from 'clsx';
import styles from './Notification.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/config-api';
function Notification() {
    const [notification, setNotification] = useState([]);
    useEffect(() => {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const key = params.get('key');
        const fecthData = async () => {
            if (key) {
                try {
                    const respones = await axios.get(`${api.notification_by_id}?id=${key}`);
                    const data = respones.data;
                    setNotification(data);
                    console.log(data);
                } catch (error) {
                    console.log(error);
                }
            }
        };
        fecthData();
    }, []);
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.notification_page)}>
                <div className={clsx(styles.no_content)}></div>
                <div className={clsx(styles.header)}>
                    <div className={clsx(styles.title)}>{notification.title}</div>
                </div>
                <div className={clsx(styles.main)}>
                    <div className={clsx(styles.content)}>{notification.message}</div>
                </div>
            </div>
        </div>
    );
}

export default Notification;
