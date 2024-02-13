import clsx from 'clsx';
import styles from './TableOrder.module.scss';

function TableOrder({ orders }) {
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
                    <div className={clsx(styles.td, styles.total)}>{order.total.toLocaleString('en-US')}đ</div>
                    <div className={clsx(styles.td, styles.method_pay)}>Sau khi nhận hàng</div>
                    <div className={clsx(styles.td, styles.pay)}>Chưa thành toán</div>
                    <div className={clsx(styles.td, styles.status)}>{order.status}</div>
                </div>
            ))}
        </div>
    );
}

export default TableOrder;
