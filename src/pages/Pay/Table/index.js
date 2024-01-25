import clsx from 'clsx';
import styles from './Table.module.scss';
function Table({ carts }) {
    return (
        <table>
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col" style={{ paddingLeft: '50px' }}>
                        <h1>Sản Phẩm</h1>
                    </th>
                    <th scope="col">Dơn giá</th>
                    <th scope="col" style={{ padding: '10px 100px' }}>
                        Số lượng
                    </th>
                    <th scope="col">Thành tiền</th>
                </tr>
            </thead>
            <tbody>
                {carts.map((cart, index) => (
                    <tr key={cart._id}>
                        <td style={{ width: '200px', paddingLeft: '50px' }}>
                            <img src={cart.id_product.image} alt="asd" width={150} />
                        </td>
                        <td style={{ width: '400px', paddingLeft: '50px' }}>
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
                                <p style={{ padding: '80px 100px' }}>{cart.quantity}</p>
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
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
