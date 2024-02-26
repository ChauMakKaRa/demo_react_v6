import clsx from 'clsx';
import styles from './PrintOrder.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/config-api';
import { useLocation } from 'react-router-dom';
import images from '@/assets/images';
function PrintOrder() {
    const [order, setOrder] = useState();
    let query = new URLSearchParams(useLocation().search);
    let id = query.get('id');
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (id) {
                    const respones = await axios.get(`${api.getOrderById}?id=${id}`);
                    setOrder(respones.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [id]);
    return (
        <div className={clsx(styles.wrapper)}>
            <div>PHIẾU GỬI HÀNG</div>
            <div className={clsx(styles.bill)}>
                <div className={clsx(styles.row1, styles.row, 'row')}>
                    <div className={clsx(styles.logo, 'col-sm-6')}>
                        <img className={clsx(styles.image)} src={images.logo} alt="logo" />
                    </div>
                    <div className={clsx(styles.id, 'col-sm-6')}>ID đơn hàng: {order ? <b>{order._id}</b> : ' '}</div>
                </div>
                <div className={clsx(styles.row2, styles.row, 'row')}>
                    <div className={clsx(styles.from, 'col-sm-6')}>
                        <div>
                            <b>Từ: Công ty KaRa.</b>
                        </div>
                        <div>Số điện thoại: 0522647842.</div>
                        <div>đường 3/2, phường Xuân Khánh, quận Ninh Kiều, tp Cần Thơ</div>
                    </div>
                    <div className={clsx(styles.to, 'col-sm-6')}>
                        <div>
                            <b>Đến: {order ? <>{`${order.user_id.addresses[0].name}`}</> : ' '}</b>
                        </div>
                        <div>Số điện thoại: {order ? <>{`${order.user_id.addresses[0].phone}`}</> : ' '}</div>
                        <div>
                            {order ? (
                                <>
                                    đường/ấp {`${order.user_id.addresses[0].street}`}, xã/phường:{' '}
                                    {`${order.user_id.addresses[0].village}`}, quận/huyện{' '}
                                    {`${order.user_id.addresses[0].district}`}, tỉnh/TP{' '}
                                    {`${order.user_id.addresses[0].province}`}
                                </>
                            ) : (
                                ' '
                            )}
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.row3, styles.row, 'row')}>
                    <div className={clsx(styles.total_quantity, 'col-sm-6')}>
                        <div>
                            <b>Hàng hóa</b> (Tổng SL: {order ? <>{order.item.length}</> : ''})
                        </div>
                    </div>
                    <div className={clsx(styles.name_product, 'col-sm-6')}>
                        {order ? (
                            <>
                                <b>SL x Tên hàng hóa</b>
                                {order.item.map((product, index) => (
                                    <div key={index}>
                                        {product.quantity} x {product.id_product.name}
                                    </div>
                                ))}
                            </>
                        ) : (
                            ' '
                        )}
                    </div>
                </div>
                <div className={clsx(styles.row4, styles.row, 'row')}>
                    <div className={clsx(styles.information, 'col-sm-6')}>
                        <div style={{ display: 'flex' }}>
                            Tiền thu người nhận:
                            {order ? <div style={{ color: 'red' }}> {order.total.toLocaleString('en-US')}đ</div> : ''}
                        </div>
                        <div>
                            - <b>Cho xem không thử hàng</b>
                        </div>
                        <div>- Chuyển hoản sau 3 lần phát</div>
                        <div>- Lưu kho tối đa 5 ngày</div>
                    </div>
                    <div className={clsx(styles.signature, 'col-sm-6 text-center')}>
                        <div>
                            <b>Chữ ký người nhận</b>
                        </div>
                        <div>Xác nhận hàng nguyên vẹn, không vị móp/vỡ</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrintOrder;
