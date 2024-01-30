import clsx from 'clsx';
import styles from './Ordered.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/config-api';
import Table from './Table';
function Ordered() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const fecthData = async () => {
            try {
                const userId = sessionStorage.getItem('_id');
                const response = await axios.get(`${api.order}?userId=${userId}`);
                setOrders(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fecthData();
    }, []);
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.order_page)}>
                <div className={clsx(styles.no_content)}></div>
                <div className={clsx(styles.content_order)}>
                    <h1>ĐƠN HÀNG</h1>
                </div>
                <div className={clsx(styles.no_content)}></div>
                <div className={clsx(styles.table)}>
                    <Table orders={orders} />
                </div>
            </div>
        </div>
    );
}

export default Ordered;
