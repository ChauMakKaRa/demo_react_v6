import clsx from 'clsx';
import styles from './Pay.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/config-api';
import Address from './Address';
import Table from './Table';
import Button from '@/components/Button';
import PaymentMethod from './PaymentMethod';
import { useNavigate } from 'react-router-dom';

function Pay() {
    const [payMethod, setPayMethod] = useState('');
    const [carts, setCarts] = useState([]);
    const [cart, setCart] = useState();
    const navigate = useNavigate();
    const InstallationFees = 100000;
    const pTotalElements = document.querySelectorAll('.p_total');
    const totalPriceArray = Array.from(pTotalElements).map((element) => parseInt(element.textContent));
    const total = totalPriceArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const moneyUS = (total + InstallationFees).toLocaleString('en-US');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const user_id = sessionStorage.getItem('id');
                const response = await axios.get(`${api.cart}?user_id=${user_id}`);
                const data = response.data;
                setCart(data);
                data.forEach((cart) => {
                    setCarts(cart.item);
                });
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const handleOrderNow = async () => {
        if (cart.length === 0) {
            alert('Không có sản phẩm trong giỏ hàng');
        } else if (payMethod === 'calculate') {
            const userId = sessionStorage.getItem('_id');
            try {
                const response = await axios.put(`${api.order}?userId=${userId}`);
                console.log(response.data);
                navigate(`/ordered`);
            } catch (error) {
                console.log(error);
            }
        } else if (payMethod === 'paypal') {
            navigate(`/pay/paypal?id=${cart[0]._id}`);
        } else {
            alert('Vui lòng chọn phương thức để thanh toán');
        }
    };
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.no_content)}></div>
            <div className={clsx(styles.pay)}>
                <div className={clsx(styles.content_pay)}>
                    <h1>Thanh Toán</h1>
                </div>
                <div className={clsx(styles.no_content)}></div>

                <Address />
                <div className={clsx(styles.no_content)}></div>

                <div className={clsx(styles.ordered)}>
                    <Table carts={carts} />
                </div>
                <div className={clsx(styles.no_content)}></div>

                <div className={clsx(styles.payment_method)}>
                    <div className="row">
                        <div className="col-sm-7">
                            <div className={clsx(styles.text_payment)}>PHƯƠNG THỨC THANH TOÁN</div>
                        </div>
                        <div className="col-sm-3">
                            <select
                                className={clsx(styles.selece_payment)}
                                value={payMethod}
                                onChange={(e) => setPayMethod(e.target.value)}
                            >
                                <option className={clsx(styles.option_null)} value={null}>
                                    Chọn phương thức thanh toán
                                </option>
                                <option className={clsx(styles.option)} value={'calculate'}>
                                    Thanh toán khi nhận hàng
                                </option>
                                <option className={clsx(styles.option)} value={'paypal'}>
                                    Thanh toán bằng PayPal
                                </option>
                            </select>
                        </div>
                        <div className="col-sm-2">
                            <div className={clsx(styles.change_method_payment)}>LƯU THAY ĐỔI</div>
                        </div>
                    </div>
                </div>
                <PaymentMethod total={total} InstallationFees={InstallationFees} moneyUS={moneyUS} />
                <div>
                    <div className="row">
                        <div className="col-sm-8"></div>
                        <div className="col-sm-4">
                            <Button className={clsx(styles.pay_now)} onClick={handleOrderNow}>
                                <p className={clsx(styles.text_pay)}>Đặt Ngay</p>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pay;
