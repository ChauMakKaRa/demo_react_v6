import clsx from 'clsx';
import styles from './Ordered.module.scss';
import { useEffect } from 'react';
import axios from 'axios';
import api from '@/config-api';
function Ordered() {
    useEffect(() => {
        const fecthData = async () => {
            try {
                const userId = sessionStorage.getItem('_id');
                const response = await axios.get(`${api.order}?userId=${userId}`);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fecthData();
    }, []);
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.order_page)}></div>
        </div>
    );
}

export default Ordered;
