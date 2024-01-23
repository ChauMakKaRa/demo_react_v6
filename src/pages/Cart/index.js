import clsx from 'clsx';
import styles from './Cart.module.scss';
import { useEffect, useState } from 'react';
import Button from '@/components/Button';
import axios from 'axios';
import api from '@/config-api';
import THead from './THead';
import TBody from './TBody';
function Cart() {
    const [carts, setCarts] = useState([]);
    const [quantityCart, setQuantityCart] = useState(0);

    const pTotalElements = document.querySelectorAll('.p_total');
    const totalPriceArray = Array.from(pTotalElements).map((element) => parseInt(element.textContent));
    const total = totalPriceArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const user_id = sessionStorage.getItem('id');
                const response = await axios.get(`${api.cart}?user_id=${user_id}`);
                const data = response.data;
                data.forEach((cart) => {
                    const quantityTotal = cart.item.reduce((total, currentItem) => total + currentItem.quantity, 0);
                    setQuantityCart(quantityTotal);
                    setCarts(cart.item);
                });
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.cart_page)}>
                <div className={clsx(styles.content_cart)}>
                    <h1>Giỏ hàng</h1>
                    <div>Tổng số lượng sản phẩm trong giỏ hàng: {quantityCart}</div>
                </div>
                <div className={clsx(styles.no_content)}></div>
                <div className={clsx(styles.cart_table)}>
                    <table className="table">
                        <THead />
                        <TBody carts={carts} />
                    </table>
                    <div className={clsx(styles.pay)}>
                        <div className="row">
                            <div className="col-sm-8"></div>
                            <div className="col-sm-2">Tổng giá trị:</div>
                            <div style={{ color: 'red' }} className="col-sm-2">
                                {total.toLocaleString('en-US')}đ
                            </div>
                        </div>
                        <div style={{ paddingBottom: '20px' }} className="row">
                            <div className="col-sm-8"></div>
                            <div className="col-sm-2">
                                <Button className={clsx(styles.btn_buying, styles.btn)}>
                                    <Button to="/">Tiếp tục mua hàng</Button>
                                </Button>
                            </div>
                            <div className="col-sm-2">
                                <Button className={clsx(styles.btn_pay, styles.btn)}>
                                    <Button to="/pay">Thanh toán</Button>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
