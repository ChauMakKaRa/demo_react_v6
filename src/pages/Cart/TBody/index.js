import clsx from 'clsx';
import styles from './TBody.module.scss';
import Button from '@/components/Button';
import axios from 'axios';
import api from '@/config-api';
function TBody({ carts }) {
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
    return (
        <tbody>
            {carts.map((cart, index) => (
                <tr key={cart._id}>
                    <th scope="row">
                        <p className={clsx(styles.p_center)} style={{ marginLeft: '10px' }}>
                            {index + 1}
                        </p>
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
                                onClick={() => handleBtnDeleteCart(sessionStorage.getItem('_id'), cart.id_product._id)}
                            >
                                Xóa
                            </Button>
                        </p>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

export default TBody;
