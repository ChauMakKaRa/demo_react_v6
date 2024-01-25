import clsx from 'clsx';
import styles from './Pay.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/config-api';
import Address from './Address';
import Table from './Table';
import Button from '@/components/Button';
import PaymentMethod from './PaymentMethod';
function Pay() {
    const [carts, setCarts] = useState([]);
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
        const userId = sessionStorage.getItem('_id');
        try {
            const response = await axios.put(`${api.order}?userId=${userId}`);
            console.log(response.data);
        } catch (error) {
            console.log(error);
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
                        <div className="col-sm-8">PHƯƠNG THỨC THANH TOÁN</div>
                        <div className="col-sm-3">Thanh toán khi nhận hàng</div>
                        <div className="col-sm-1">THAY ĐỔI</div>
                    </div>
                </div>
                <PaymentMethod total={total} InstallationFees={InstallationFees} moneyUS={moneyUS} />
                <div>
                    <div className="row">
                        <div className="col-sm-8"></div>
                        <div className="col-sm-4">
                            <Button className={clsx(styles.pay_now)} onClick={handleOrderNow}>
                                <Button to="/ordered">Đặt Ngay</Button>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pay;
