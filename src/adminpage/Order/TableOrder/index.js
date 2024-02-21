import clsx from 'clsx';
import styles from './TableOrder.module.scss';
import Button from '@/components/Button';
import axios from 'axios';
import api from '@/config-api';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

function TableOrder({ orders }) {
    const [idOrders, setIdOrders] = useState();
    const handleChangeStatus = async (id) => {
        try {
            const respones = await axios.put(`${api.cart_admin}?id_cart=${id}`);
            const data = respones.data;
            alert(data.message);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    const handleCofirmEmail = async (id, id_order) => {
        console.log(id_order);
        try {
            const confirm = window.confirm(
                'Sau khi xác nhận sẽ xóa đơn hàng, bạn có chắc muốn tiếp tục xác nhận hay không?',
            );
            if (confirm) {
                const respones = await axios.post(`${api.sendEmailCofirm}?id=${id}&id_order=${id_order}`);
                const data = respones.data;
                alert(data.message);
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const [copied, setCopied] = useState(false);

    const handleCopy = (textToCopy) => {
        navigator.clipboard.writeText(textToCopy); // Sao chép văn bản vào clipboard
        setCopied(true); // Cập nhật trạng thái đã sao chép
        setTimeout(() => {
            setCopied(false); // Sau một khoảng thời gian, reset trạng thái đã sao chép
        }, 1500); // 1.5 giây
    };
    // const handleDeleteCart = async (id) => {
    //     try {
    //         const confirm = window.confirm('Bạn có chắc chắn xóa đơn hàng này không?');
    //         if (confirm) {
    //             await axios.delete(`${api.cart_admin}?id=${id}`);
    //             window.location.reload();
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    return (
        <div className={clsx(styles.table)}>
            <div className={clsx(styles.head_table)}>
                <div className={clsx(styles.input_checkbox)}>
                    <input type="checkbox" />
                </div>
                <div className={clsx(styles.id_order)}>
                    <b>ID Đơn hàng</b>
                </div>
                <div className={clsx(styles.td, styles.date_ordered)}>
                    <b>Ngày đặt</b>
                </div>
                <div className={clsx(styles.customers)}>
                    <b>ID Khách hàng</b>
                </div>
                <div className={clsx(styles.td, styles.total)}>
                    <b>Tổng tiền</b>
                </div>
                <div className={clsx(styles.td, styles.method_pay)}>
                    <b>Hình thức thanh toán</b>
                </div>
                <div className={clsx(styles.td, styles.pay)}>
                    <b>Thanh toán</b>
                </div>
                <div className={clsx(styles.td, styles.status)}>
                    <b>Trạng thái</b>
                </div>
            </div>

            {orders.map((order, index) => (
                <div key={index} className={clsx(styles.body_table)}>
                    <div className={clsx(styles.input_checkbox)}>
                        <input type="checkbox" value={idOrders} onChange={(e) => setIdOrders(e.target.value)} />
                    </div>
                    <div className={clsx(styles.id_order)}>{order.id}</div>
                    <div className={clsx(styles.td, styles.date_ordered)}>1/2/2024</div>
                    <div className={clsx(styles.customers)}>
                        {order.user_id}{' '}
                        <FontAwesomeIcon
                            icon={faCopy}
                            onClick={() => handleCopy(order.user_id)}
                            style={{ paddingBottom: ' 15px', paddingLeft: '5px', cursor: 'pointer', color: '#878787' }}
                        />
                        {copied && (
                            <span style={{ marginLeft: '90px', position: 'absolute', marginBottom: '35px' }}>
                                Đã sao chép!
                            </span>
                        )}
                    </div>
                    <div className={clsx(styles.td, styles.total)}>
                        <div style={{ color: 'red' }}>{order.total.toLocaleString('en-US')}đ</div>
                    </div>
                    <div className={clsx(styles.td, styles.method_pay)}>Sau khi nhận hàng</div>
                    <div className={clsx(styles.td, styles.pay)}>
                        {order.status === 'Đã giao' ? (
                            <div className={clsx(styles.paid)}>Đã thành toán</div>
                        ) : (
                            <div className={clsx(styles.unpaid)}>Chưa thành toán</div>
                        )}
                    </div>
                    <div className={clsx(styles.td, styles.status)}>
                        {order.status === 'Đã giao' ? (
                            // <Button
                            //     className={clsx(styles.btn_submit_status)}
                            //     onClick={() => handleDeleteCart(order._id)}
                            // >
                            //     Xác nhận
                            // </Button>
                            <Button
                                className={clsx(styles.btn_submit_status)}
                                onClick={() => handleCofirmEmail(order.user_id, order._id)}
                            >
                                Xác nhận
                            </Button>
                        ) : (
                            <Button
                                className={clsx(styles.btn_submit_status)}
                                onClick={() => handleChangeStatus(order._id)}
                            >
                                {order.status}
                            </Button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TableOrder;
