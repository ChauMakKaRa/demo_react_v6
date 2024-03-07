import clsx from 'clsx';
import styles from './Ordered.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/config-api';
import Table from './Table';
import Button from '@/components/Button';
function Ordered() {
    const [orders, setOrders] = useState([]);
    const [value, setValue] = useState('all');
    const [tempValue, setTempValue] = useState('all');
    const fetchData = async (value) => {
        try {
            const userId = sessionStorage.getItem('_id');
            const response = await axios.get(`${api.order}?userId=${userId}&value=${value}`);
            setOrders(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    const handleSunmit = () => {
        fetchData(value);
        setTempValue(tempValue);
    };
    useEffect(() => {
        fetchData(tempValue);
    }, [tempValue]);

    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.order_page)}>
                <div className={clsx(styles.no_content)}></div>
                <div className={clsx(styles.content_order)}>
                    <h1>ĐƠN HÀNG</h1>
                </div>
                <div className={clsx(styles.no_content)}></div>
                <div className={clsx(styles.heading)}>
                    <div className={clsx(styles.col_1)}>
                        <div className={clsx(styles.select)}>
                            <select value={value} onChange={(e) => setValue(e.target.value)}>
                                <option value={'all'}>Tất cả</option>
                                <option value={'chưa duyệt'}>Chưa duyệt</option>
                                <option value={'đang giao'}>Đang giao</option>
                                <option value={'đã giao'}>Đa giao</option>
                            </select>
                        </div>
                    </div>
                    <div className={clsx(styles.submit)}>
                        <Button type="submit" onClick={handleSunmit}>
                            Áp dụng
                        </Button>
                    </div>
                </div>
                <div className={clsx(styles.table)}>
                    <Table orders={orders} />
                </div>
            </div>
        </div>
    );
}

export default Ordered;
