import clsx from 'clsx';
import styles from './Order.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/Button';
import TableOrder from './TableOrder';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/config-api';
function OrderPageAdmin() {
    const [orders, setOrders] = useState([]);

    const [selectedValue, setSelectedValue] = useState('filter');
    const [tempValue, setTempValue] = useState('filter');

    const handleDropdownChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const fetchData = async (selectedValue) => {
        try {
            const respones = await axios.get(`${api.get_all_order}?value=${selectedValue}`);
            const data = respones.data;
            setOrders(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmitOption = () => {
        console.log(selectedValue);
        fetchData(selectedValue);
        setTempValue(tempValue);
    };

    useEffect(() => {
        fetchData(tempValue);
    }, [tempValue]);
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.page_manager_order)}>
                <div className={clsx(styles.head_order)}>
                    <div className={clsx(styles.content_order)}>Quản lý đơn hàng</div>
                    <div className={clsx(styles.delete_div)}>
                        <Button className={clsx(styles.btn_delete)}>Xóa đơn hàng</Button>
                    </div>
                    <div className={clsx(styles.print_biil)}>
                        <Button className={clsx(styles.btn_print_biil)}>In đơn</Button>
                        <FontAwesomeIcon icon={faPrint} />
                    </div>
                    <div className={clsx(styles.no_content)}></div>

                    <div className={clsx(styles.select_option)} value={selectedValue} onChange={handleDropdownChange}>
                        <select id={clsx(styles.my_select)}>
                            <option value="all">Tất cả</option>
                            <option value="Chờ duyệt">Chưa duyệt</option>
                            <option value="Đang giao">Đã duyệt</option>
                            <option value="Đã giao">Đã thanh toán</option>
                        </select>
                    </div>
                    <div className={clsx(styles.btn_submit)}>
                        <Button onClick={handleSubmitOption}>Áp dụng</Button>
                    </div>
                    <div className={clsx(styles.search)}>
                        <input type="text" placeholder="Nhập id khách hàng..." />
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
