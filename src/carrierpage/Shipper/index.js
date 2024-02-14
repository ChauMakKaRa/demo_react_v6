import clsx from 'clsx';
import styles from './Shipper.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/config-api';
function ShipperPage() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const respones = await axios.get(`${api.cart_shipper}`);
                const data = respones.data;
                setOrders(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    const handleConfirmDelivered = async (id) => {
        try {
            const confirm = window.confirm('Bạn có chắc muốn xác nhận đơn hàng đã được giao hay không?');
            if (confirm) {
                const respones = await axios.patch(`${api.cart_shipper}?cart_id=${id}`);
                const data = respones.data;
                alert(data.message);
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={clsx(styles.shipper_page)}>
            <div className={clsx(styles.no_content)}></div>
            <div className={clsx(styles.head_shipper_page)}>
                <div className={clsx(styles.content)}>VẬN CHUYỂN VÀ LẮP ĐẶT SẢN PHẨM </div>
            </div>
            <div className={clsx(styles.no_content)}></div>
            <div className={clsx(styles.main_repair)}>
                <div className={clsx(styles.table)}>
                    <div className={clsx(styles.head_table)}>
                        <div className="row">
                            <div className="col-sm-2">ID đơn hàng</div>
                            <div className="col-sm-2">Tên khách hàng</div>
                            <div className="col-sm-2">Số điện thoại</div>
                            <div className="col-sm-3">Địa chỉ</div>
                            <div className="col-sm-2">Trạng thái</div>
                            <div className="col-sm-1"></div>
                        </div>
                    </div>
                    <div className={clsx(styles.body_table)}>
                        {orders.length === 0 ? (
                            <div style={{ color: 'red', marginLeft: '36%', padding: '10px' }}>
                                Không có đơn hàng nào để vận chuyển!
                            </div>
                        ) : (
                            <>
                                {orders.map((order, index) => (
                                    <div key={index} className={clsx(styles.main_table)}>
                                        <div className="row">
                                            <div className="col-sm-2">{order._id}</div>
                                            <div className="col-sm-2">{`${order.user_id.addresses[0].name}`}</div>
                                            <div className="col-sm-2">{`${order.user_id.addresses[0].phone}`}</div>
                                            <div className="col-sm-3">
                                                Số nhà: {`${order.user_id.addresses[0].number_house}`}, đường:{' '}
                                                {`${order.user_id.addresses[0].street}`}, phường:{' '}
                                                {`${order.user_id.addresses[0].village}`}, quận:{' '}
                                                {`${order.user_id.addresses[0].district}`}, tỉnh:{' '}
                                                {`${order.user_id.addresses[0].province}`}
                                            </div>
                                            <div className="col-sm-2">
                                                {order.status === 'Đã duyệt' ? (
                                                    <>Đang vận chuyển</>
                                                ) : (
                                                    <>Đã thanh toán</>
                                                )}
                                            </div>
                                            <div className="col-sm-1">
                                                <button
                                                    onClick={() => handleConfirmDelivered(order._id)}
                                                    className={clsx(styles.btn_delivered)}
                                                >
                                                    Đã giao
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShipperPage;
