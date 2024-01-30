import clsx from 'clsx';
import styles from './Table.module.scss';
function Table({ items }) {
    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">
                        <p style={{ marginLeft: '30px', marginTop: '10px' }}>Hình ảnh</p>
                    </th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Giá sản phẩm</th>
                    <th scope="col">
                        <p style={{ marginLeft: '100px', marginTop: '10px' }}>Số lượng</p>
                    </th>
                    <th scope="col">
                        <p style={{ marginLeft: '100px', marginTop: '10px' }}> Giá tạm tính </p>
                    </th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                        <th scope="row">
                            <p className={clsx(styles.p_center)} style={{ marginLeft: '10px' }}>
                                {index + 1}
                            </p>
                        </th>
                        <td style={{ width: '200px' }}>
                            <img src={item.id_product.image} alt="asd" width={150} style={{ marginLeft: '10px' }} />
                        </td>
                        <td style={{ width: '300px', paddingRight: '30px' }}>
                            <p className={clsx(styles.p_center)}>
                                [{item.id_product.id}] {item.id_product.name}
                            </p>
                        </td>
                        <td>
                            <p className={clsx(styles.p_center)} style={{ color: 'red' }}>
                                {item.id_product.price.toLocaleString('en-US')}đ
                            </p>
                        </td>
                        <td>
                            <div className={clsx(styles.div_center)} style={{ marginLeft: '100px' }}>
                                <input
                                    className={clsx(styles.input_count)}
                                    value={item.quantity}
                                    onChange={(e) => (item.quantity = e.target.value)}
                                />
                            </div>
                        </td>
                        <td>
                            <p className="p_total" style={{ display: 'none' }}>
                                {item.quantity * item.id_product.price}
                            </p>
                            <p className={clsx(styles.div_center)} style={{ color: 'red', marginLeft: '100px' }}>
                                {(item.quantity * item.id_product.price).toLocaleString('en-US')}đ
                            </p>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
