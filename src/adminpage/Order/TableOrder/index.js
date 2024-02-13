import clsx from 'clsx';
import styles from './TableOrder.module.scss';
import Button from '@/components/Button';
import axios from 'axios';
import api from '@/config-api';

function TableOrder({ orders }) {
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

    const handleDeleteCart = async (id) => {
        console.log(id);
    };

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
                        <input type="checkbox" />
                    </div>
                    <div className={clsx(styles.id_order)}>{order.id}</div>
                    <div className={clsx(styles.td, styles.date_ordered)}>1/2/2024</div>
                    <div className={clsx(styles.customers)}>{order.user_id}</div>
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
                            <Button
                                className={clsx(styles.btn_submit_status)}
                                onClick={() => handleDeleteCart(order._id)}
                            >
                                Xóa
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
