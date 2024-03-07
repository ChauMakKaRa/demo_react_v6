import clsx from 'clsx';
import styles from './Order.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/Button';
// import TableOrder from './TableOrder';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/config-api';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
function OrderPageAdmin() {
    const [orders, setOrders] = useState([]);
    const [selectedValue, setSelectedValue] = useState('filter');
    const [tempValue, setTempValue] = useState('filter');
    const [idOrders, setIdOrders] = useState([]);

    const handleDropdownChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const fetchData = async (selectedValue) => {
        try {
            const respones = await axios.get(`${api.get_all_order}?value=${selectedValue}`);
            const data = respones.data;
            setOrders(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmitOption = () => {
        fetchData(selectedValue);
        setTempValue(tempValue);
    };
    useEffect(() => {
        fetchData(tempValue);
    }, [tempValue]);

    const handleDeleteOrders = async () => {
        const confirm = window.confirm('Bạn có chắc chắn muốn xóa đơn hàng này không');
        if (confirm) {
            try {
                const respones = await axios.delete(`${api.getOrderById}`, {
                    data: { idOrders: idOrders },
                });
                console.log(respones.data.message);
            } catch (error) {
                console.log(error);
            }
        }
    };
    //table
    const handleChangeStatus = async (id) => {
        try {
            const respones = await axios.put(`${api.cart_admin}?id_cart=${id}`);
            const data = respones.data;
            alert(data.message);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };
    const handleCheck = (id) => {
        setIdOrders((prev) => {
            const isChecked = idOrders.includes(id);
            if (isChecked) {
                return idOrders.filter((item) => item !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    const handleCofirmEmail = async (id, id_order) => {
        try {
            const confirm = window.confirm(
                'Sau khi xác nhận sẽ xóa đơn hàng, bạn có chắc muốn tiếp tục xác nhận hay không?',
            );
            if (confirm) {
                const respones = await axios.post(`${api.sendEmailCofirm}?id=${id}&id_order=${id_order}`);
                const data = respones.data;
                alert(data.message);
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const [copied, setCopied] = useState(false);

    const handleCopy = (textToCopy) => {
        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.page_manager_order)}>
                <div className={clsx(styles.head_order)}>
                    <div className={clsx(styles.content_order)}>Quản lý đơn hàng</div>
                    <div className={clsx(styles.delete_div)}>
                        <Button className={clsx(styles.btn_delete)} onClick={handleDeleteOrders}>
                            Xóa đơn hàng
                        </Button>
                    </div>
                    <div className={clsx(styles.print_biil)} style={{ cursor: 'pointer' }}>
                        <Button
                            to={`/admin/order/print?id=${idOrders}`}
                            style={{ color: 'white' }}
                            className={clsx(styles.btn_print_biil)}
                        >
                            In đơn
                        </Button>
                        <FontAwesomeIcon icon={faPrint} />
                    </div>
                    <div className={clsx(styles.no_content)}></div>

                    <div className={clsx(styles.select_option)} value={selectedValue} onChange={handleDropdownChange}>
                        <select id={clsx(styles.my_select)}>
                            <option value="all">Tất cả</option>
                            <option value="Chờ duyệt">Chưa duyệt</option>
                            <option value="Đang giao">Đã duyệt</option>
                            <option value="Đã giao">Đã thanh toán</option>
                        </select>
                    </div>
                    <div className={clsx(styles.btn_submit)}>
                        <Button onClick={handleSubmitOption}>Áp dụng</Button>
                    </div>
                    <div className={clsx(styles.search)}>
                        <input type="text" placeholder="Nhập id khách hàng..." />
                        <FontAwesomeIcon className={clsx(styles.icon_search)} icon={faSearch} />
                    </div>
                </div>
                <div className={clsx(styles.main_order)}>
                    {/* <TableOrder orders={orders} /> */}
                    <div className={clsx(styles.table)}>
                        <div className={clsx(styles.head_table)}>
                            <div className={clsx(styles.input_checkbox)}>
                                <input type="checkbox" />
                            </div>
                            <div className={clsx(styles.id_order)}>
                                <b>ID Đơn hàng</b>
                            </div>
                            <div className={clsx(styles.td, styles.date_ordered)}>
                                <b>Ngày đặt</b>
                            </div>
                            <div className={clsx(styles.customers)}>
                                <b>ID Khách hàng</b>
                            </div>
                            <div className={clsx(styles.td, styles.total)}>
                                <b>Tổng tiền</b>
                            </div>
                            <div className={clsx(styles.td, styles.method_pay)}>
                                <b>Hình thức thanh toán</b>
                            </div>
                            <div className={clsx(styles.td, styles.pay)}>
                                <b>Thanh toán</b>
                            </div>
                            <div className={clsx(styles.td, styles.status)}>
                                <b>Trạng thái</b>
                            </div>
                        </div>
                        {orders.length === 0 ? (
                            <div style={{ color: 'red', textAlign: 'center', marginTop: '50px' }}>
                                Hiện đang không có đơn đặt hàng nào.
                            </div>
                        ) : (
                            <></>
                        )}
                        {orders.map((order, index) => (
                            <div key={index} className={clsx(styles.body_table)}>
                                <div className={clsx(styles.input_checkbox)}>
                                    <input
                                        type="checkbox"
                                        checked={idOrders.includes(order._id)}
                                        onChange={() => handleCheck(order._id)}
                                    />
                                </div>
                                <div className={clsx(styles.id_order)}>{order.id}</div>
                                <div className={clsx(styles.td, styles.date_ordered)}>1/2/2024</div>
                                <div className={clsx(styles.customers)}>
                                    {order.user_id}{' '}
                                    <FontAwesomeIcon
                                        icon={faCopy}
                                        onClick={() => handleCopy(order.user_id)}
                                        style={{
                                            paddingBottom: ' 15px',
                                            paddingLeft: '5px',
                                            cursor: 'pointer',
                                            color: '#878787',
                                        }}
                                    />
                                    {copied && (
                                        <span
                                            style={{ marginLeft: '90px', position: 'absolute', marginBottom: '35px' }}
                                        >
                                            Đã sao chép!
                                        </span>
                                    )}
                                </div>
                                <div className={clsx(styles.td, styles.total)}>
                                    <div style={{ color: 'red' }}>{order.total.toLocaleString('en-US')}đ</div>
                                </div>
                                <div className={clsx(styles.td, styles.method_pay)}>Sau khi nhận hàng</div>
                                <div className={clsx(styles.td, styles.pay)}>
                                    {order.status === 'Đã giao' ? (
                                        <div className={clsx(styles.paid)}>Đã thành toán</div>
                                    ) : (
                                        <div className={clsx(styles.unpaid)}>Chưa thành toán</div>
                                    )}
                                </div>
                                <div className={clsx(styles.td, styles.status)}>
                                    {order.status === 'Đã giao' ? (
                                        <Button
                                            className={clsx(styles.btn_submit_status)}
                                            onClick={() => handleCofirmEmail(order.user_id, order._id)}
                                        >
                                            Xác nhận
                                        </Button>
                                    ) : (
                                        <Button
                                            className={clsx(styles.btn_submit_status)}
                                            onClick={() => handleChangeStatus(order._id)}
                                        >
                                            {order.status}
                                        </Button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderPageAdmin;
