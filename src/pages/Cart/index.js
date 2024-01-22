import clsx from 'clsx';
import styles from './Cart.module.scss';
import { useEffect, useState } from 'react';
import Button from '@/components/Button';
import axios from 'axios';
import api from '@/config-api';
function Cart() {
    const [carts, setCarts] = useState([]);
    const [quantityCart, setQuantityCart] = useState(0);
    // const [checked, setChecked] = useState([]);

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

    // const handleCheckedChange = async (id) => {
    //     setChecked((prev) => {
    //         const isChecked = checked.includes(id);
    //         if (isChecked) {
    //             return checked.filter((item) => item !== id);
    //         } else {
    //             return [...prev, id];
    //         }
    //     });
    // };

    const handleBtnDeleteCart = async (id_user, product_id) => {
        try {
            const confirmDelete = window.confirm('Bạn chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng không?');
            if (confirmDelete) {
                await axios.delete(`${api.cart}?id_user=${id_user}&product_id=${product_id}`);
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };

    // const handlePayProduct = async () => {
    //     console.log(checked);
    // };
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
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {carts.map((cart, index) => (
                                <tr key={cart._id}>
                                    <th scope="row">
                                        <p className={clsx(styles.p_center)} style={{ marginLeft: '10px' }}>
                                            {index + 1}
                                        </p>
                                        {/* <input
                                            type="checkbox"
                                            checked={checked.includes(cart.id_product.id)}
                                            onChange={() => handleCheckedChange(cart.id_product.id)}
                                            style={{ marginTop: '40px' }}
                                        /> */}
                                    </th>
                                    <td style={{ width: '200px' }}>
                                        <img src={cart.id_product.image} alt="asd" width={150} />
                                    </td>
                                    <td style={{ width: '300px', paddingRight: '30px' }}>
                                        <p className={clsx(styles.p_center)}>
                                            [{cart.id_product.id}] {cart.id_product.name}
                                        </p>
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
                                                value={cart.quantity}
                                                onChange={(e) => (cart.quantity = e.target.value)}
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <p className="p_total" style={{ display: 'none' }}>
                                            {cart.quantity * cart.id_product.price}
                                        </p>
                                        <p className={clsx(styles.div_center)} style={{ color: 'red' }}>
                                            {(cart.quantity * cart.id_product.price).toLocaleString('en-US')}đ
                                        </p>
                                    </td>
                                    <td>
                                        <p className={clsx(styles.div_center)}>
                                            <Button
                                                className={clsx(styles.btn_delete_cart)}
                                                onClick={() =>
                                                    handleBtnDeleteCart(
                                                        sessionStorage.getItem('_id'),
                                                        cart.id_product._id,
                                                    )
                                                }
                                            >
                                                Xóa
                                            </Button>
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
