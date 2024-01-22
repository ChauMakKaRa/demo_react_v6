import clsx from 'clsx';
import styles from './Cart.module.scss';
import { useEffect, useState } from 'react';
import Button from '@/components/Button';
import axios from 'axios';
import api from '@/config-api';
function Cart() {
    const [count, setCount] = useState();
    // const [carts, setCarts] = useState([]);
    const [carts, setCarts] = useState([]);
    const [quantityCart, setQuantityCart] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const user_id = sessionStorage.getItem('id');
                const response = await axios.get(`${api.cart}?user_id=${user_id}`);
                const data = response.data;
                data.forEach((cart) => {
                    const quantityTotal = cart.item.reduce((total, currentItem) => total + currentItem.quantity, 0);
                    setQuantityCart(quantityTotal - 1);
                    setCarts(cart.item);
                });
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const handleCountChange = async (e) => {
        setCount(e.target.value);
    };

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
                        <thead>
                            <tr>
                                <th scope="col" style={{ textAlign: 'center' }}>
                                    #
                                </th>
                                <th scope="col">Hình ảnh</th>
                                <th scope="col">Tên</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Tạm tính</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carts.map((cart) => (
                                <tr key={cart._id}>
                                    <th scope="row">
                                        <input type="checkbox" style={{ marginTop: '40px' }} />
                                    </th>
                                    <td style={{ width: '200px' }}>
                                        <img src={cart.id_product.image} alt="asd" width={150} />
                                    </td>
                                    <td style={{ width: '300px', paddingRight: '30px' }}>
                                        <p className={clsx(styles.p_center)}>{cart.id_product.name}</p>
                                    </td>
                                    <td>
                                        <p className={clsx(styles.p_center)} style={{ color: 'red' }}>
                                            {cart.id_product.price.toLocaleString('en-US')}đ
                                        </p>
                                    </td>
                                    <td>
                                        <div className={clsx(styles.div_center)}>
                                            <input
                                                className={clsx(styles.input_count)}
                                                value={cart.quantity || count}
                                                onChange={handleCountChange}
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <p className={clsx(styles.p_center)} style={{ color: 'red' }}>
                                            {(cart.quantity * cart.id_product.price).toLocaleString('en-US')}đ
                                        </p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className={clsx(styles.pay)}>
                        <div className="row">
                            <div className="col-sm-8"></div>
                            <div className="col-sm-2">Tổng giá trị:</div>
                            <div className="col-sm-2">300,000,00đ</div>
                        </div>
                        <div className="row">
                            <div className="col-sm-8"></div>
                            <div className="col-sm-2">
                                <Button className={clsx(styles.btn_buying, styles.btn)}>Tiếp tục mua hàng</Button>
                            </div>
                            <div className="col-sm-2">
                                <Button className={clsx(styles.btn_pay, styles.btn)}>Thanh toán</Button>{' '}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
