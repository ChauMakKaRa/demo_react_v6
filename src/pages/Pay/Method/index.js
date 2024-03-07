import clsx from 'clsx';
import styles from './Method.module.scss';
import PayPal from '../PayPal';
import images from '@/assets/images';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/config-api';
function MethodPay() {
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const user_id = sessionStorage.getItem('id');
                const response = await axios.get(`${api.cart}?user_id=${user_id}`);
                const data = response.data;
                data.forEach((cart) => {
                    setCarts(cart.item);
                });
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    const Total = (carts) => {
        let total = 0;
        carts.forEach((cart) => {
            total += cart.id_product.price * cart.quantity;
        });
        return total;
    };
    const TotalDollas = (Total) => {
        return (Total / 24500).toFixed(2);
    };
    return (
        <div className={clsx(styles.method_pay)}>
            <div className={clsx(styles.row, 'row')}>
                <div className={clsx(styles.col_5, 'col-sm-5')}>
                    <div className={clsx(styles.background)}>
                        <img src={`${images.payment}`} alt="payment" />
                    </div>
                </div>
                <div className={clsx(styles.col_7, 'col-sm-7')}>
                    <div>
                        <h2>CHECKOUT YOUR ORDER</h2>
                        <table className={clsx(styles.table, 'table table-striped')}>
                            <thead>
                                <tr>
                                    <th scope="col">Sản phẩm</th>
                                    <th scope="col">Số lượng</th>
                                    <th scope="col">Tổng giá sản phầm</th>
                                </tr>
                            </thead>
                            <tbody>
                                {carts.map((cart, index) => (
                                    <tr key={index}>
                                        <td>{`${cart.id_product.name}`}</td>
                                        <td>{cart.quantity}</td>
                                        <td>{`${cart.id_product.price.toLocaleString('en-US')}`}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className={clsx(styles.total)}>
                        <b>Tổng cần thanh toán</b> :{' '}
                        <b style={{ color: 'red' }}>{Total(carts).toLocaleString('en-US')} VND</b>
                    </div>
                    <div className={clsx(styles.paypal)}>
                        <PayPal amount={TotalDollas(Total(carts))} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MethodPay;
