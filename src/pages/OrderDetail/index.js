import clsx from 'clsx';
import styles from './OrderDetail.module.scss';
import Table from './Table';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/config-api';
function OrderDetail() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        let isMounted = true;

        const urlParams = new URLSearchParams(window.location.search);
        const order_id = urlParams.get('order_id');

        const fetchData = async () => {
            try {
                const response = await axios.get(`${api.detailorder}?order_id=${order_id}`);
                const data = response.data;
                if (isMounted) {
                    setItems(data.item);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.order_detail_page)}>
                <div className={clsx(styles.no_content)}></div>
                <div className={clsx(styles.content_order_detail)}>
                    <h1>CHI TIẾT ĐƠN HÀNG</h1>
                </div>
                <div className={clsx(styles.no_content)}></div>
                <div className={clsx(styles.detail_table)}>
                    <Table items={items} />
                </div>
            </div>
        </div>
    );
}

export default OrderDetail;
