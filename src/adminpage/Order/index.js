import clsx from 'clsx';
import styles from './Order.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/Button';
import TableOrder from './TableOrder';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/config-api';
function OrderPageAdmin() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const respones = await axios.get(`${api.get_all_order}`);
                const data = respones.data;
                setOrders(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.page_manager_order)}>
                <div className={clsx(styles.head_order)}>
                    <div className={clsx(styles.content_order)}>Quản lý đơn hàng</div>
                    <div className={clsx(styles.delete_div)}>
                        <Button className={clsx(styles.btn_delete)}>Xóa đơn hàng</Button>
                    </div>
                    <div className={clsx(styles.no_content)}></div>

                    <div className={clsx(styles.select_option)}>
                        <select id={clsx(styles.my_select)}>
                            <option value="filter">Tất cả</option>
                            <option value="Chưa duyệt">Chưa duyệt</option>
                            <option value="Đã duyệt">Đã duyệt</option>
                            <option value="Đã thanh toán">Đã thanh toán</option>
                        </select>
                    </div>
                    <div className={clsx(styles.btn_submit)}>
                        <Button>Áp dụng</Button>
                    </div>
                    <div className={clsx(styles.search)}>
                        <input type="text" placeholder="Nhập số điện thoại..." />
                        <FontAwesomeIcon className={clsx(styles.icon_search)} icon={faSearch} />
                    </div>
                </div>
                <div className={clsx(styles.main_order)}>
                    <TableOrder orders={orders} />
                </div>
            </div>
        </div>
    );
}

export default OrderPageAdmin;
