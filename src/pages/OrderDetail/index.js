import clsx from 'clsx';
import styles from './OrderDetail.module.scss';
import Table from './Table';
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/config-api';
import Address from '../Pay/Address';
function OrderDetail() {
    const [items, setItems] = useState([]);
    const [order, setOrder] = useState([]);
    const [addresses, setAddresses] = useState([]);
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
                    setOrder(data);
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
    useEffect(() => {
        const userId = sessionStorage.getItem('_id');
        const fetchData = async () => {
            try {
                const responese = await axios.get(`${api.user}?userId=${userId}`);
                const data = responese.data.addresses;
                setAddresses(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.order_detail_page)}>
                <div className={clsx(styles.no_content)}></div>
                <div className={clsx(styles.content_order_detail)}>
                    <h1>CHI TIẾT ĐƠN HÀNG</h1>
                </div>
                <div className={clsx(styles.no_content)}></div>
                <div className={clsx(styles.address)}>
                    <div className={clsx(styles.content_address)}>
                        <div>
                            <h2>Địa chỉ: </h2>{' '}
                            <h3>(chỉ có thể thay đồi khi người quản trị chưa duyệt đơn hàng của bạn)</h3>
                            {order.status === 'Chờ duyệt' ? (
                                <div>
                                    <Address />
                                </div>
                            ) : (
                                <div>
                                    {addresses.map((address, index) => (
                                        <div key={index} className="row">
                                            {' '}
                                            {address.choose === true ? (
                                                <>
                                                    <div className="col-sm-1"></div>
                                                    <div className="col-sm-2">
                                                        <div>{address.name} (+84)</div>
                                                        <div>{address.phone}</div>
                                                    </div>
                                                    <div className="col-sm-7">
                                                        Số nhà: {address.number_house}, đường: {address.street},
                                                        xã/phường {address.village}, quận/huyện: {address.district},
                                                        tỉnh/tp: {address.province}
                                                    </div>
                                                </>
                                            ) : (
                                                ''
                                            )}{' '}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.no_content)}></div>
                <div className={clsx(styles.detail_table)}>
                    <Table items={items} />
                </div>
                <div className={clsx(styles.no_content)}></div>
                <div className={clsx(styles.method_pay)}>
                    <h2>Phương thức thanh toán:</h2>
                    <div className={clsx(styles.method)}>
                        {order.pay === 'Chưa thanh toán' ? (
                            <div style={{ display: 'flex' }}>
                                <b>Thán toán sau khi nhận hàng:</b>{' '}
                                <p style={{ color: 'red', margin: '0 10px' }}>{order.pay}</p>
                            </div>
                        ) : (
                            <div>Thanh toán bằng Paypal: {order.pay}</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetail;
