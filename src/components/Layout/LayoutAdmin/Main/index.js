import clsx from 'clsx';
import styles from './Main.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCircleDollarToSlot, faScrewdriverWrench, faUsers } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/config-api';

function Main() {
    const [selectedTab, setSelectedTab] = useState(null);
    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [repairs, setRepairs] = useState([]);

    useEffect(() => {
        const admin_id = sessionStorage.getItem('_id');
        const fetchData = async () => {
            try {
                const respones = await axios.get(`${api.userexceptadmin}?adminId=${admin_id}`);
                const data = respones.data;
                setUsers(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const respones = await axios.get(`${api.repair_admin}`);
                const data = respones.data;
                setRepairs(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const respones = await axios.get(`${api.get_all_order}`);
                const data = respones.data;
                setOrders(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <div className={clsx(styles.cards)}>
                <Button
                    to={'/admin/account'}
                    className={clsx(styles.card_single)}
                    onClick={() => setSelectedTab('account')}
                    style={{
                        background: selectedTab === 'account' ? '#fe2c55' : 'white',
                        color: selectedTab === 'account' ? 'white' : '#fe2c55',
                    }}
                >
                    <div>
                        <div className={clsx(styles.card_flex)}>
                            <div className={clsx(styles.card_info)}>
                                <div className={clsx(styles.card_head)}>
                                    <span>Khách hàng</span>
                                    <small>Số lượng khách hàng </small>
                                </div>
                                <h2>{users.length}</h2>
                                <small>Customer</small>
                            </div>
                            <div className={clsx(styles.card_chart)}>
                                <FontAwesomeIcon className={clsx(styles.chart_icon)} icon={faUsers} />
                            </div>
                        </div>
                    </div>
                </Button>

                {/* {} */}
                <Button
                    to={'/admin/order'}
                    onClick={() => setSelectedTab('order')}
                    style={{
                        background: selectedTab === 'order' ? '#fe2c55' : 'white',
                        color: selectedTab === 'order' ? 'white' : '#fe2c55',
                    }}
                >
                    <div className={clsx(styles.card_single)}>
                        <div className={clsx(styles.card_flex)}>
                            <div className={clsx(styles.card_info)}>
                                <div className={clsx(styles.card_head)}>
                                    <span>Đơn hàng</span>
                                    <small>Số lượng đơn hàng</small>
                                </div>
                                <h2>{orders.length}</h2>
                                <small>Order</small>
                            </div>
                            <div className={clsx(styles.card_chart)}>
                                <FontAwesomeIcon
                                    className={clsx(styles.primary, styles.chart_icon)}
                                    icon={faBagShopping}
                                />
                            </div>
                        </div>
                    </div>
                </Button>
                {/* {} */}
                <Button
                    to={'/admin/shippement'}
                    onClick={() => setSelectedTab('project')}
                    style={{
                        background: selectedTab === 'project' ? '#fe2c55' : 'white',
                        color: selectedTab === 'project' ? 'white' : '#fe2c55',
                    }}
                >
                    <div className={clsx(styles.card_single)}>
                        <div className={clsx(styles.card_flex)}>
                            <div className={clsx(styles.card_info)}>
                                <div className={clsx(styles.card_head)}>
                                    <span>Bảo hành</span>
                                    <small>Bảo hành và sửa chữa</small>
                                </div>
                                <h2>{repairs.length}</h2>
                                <small>Repair</small>
                            </div>
                            <div className={clsx(styles.card_chart)}>
                                <FontAwesomeIcon
                                    className={clsx(styles.primary, styles.chart_icon)}
                                    icon={faScrewdriverWrench}
                                />
                            </div>
                        </div>
                    </div>
                </Button>
                {/* {} */}
                <Button
                    to={'/admin/incone'}
                    onClick={() => setSelectedTab('incone')}
                    style={{
                        background: selectedTab === 'incone' ? '#fe2c55' : 'white',
                        color: selectedTab === 'incone' ? 'white' : '#fe2c55',
                    }}
                >
                    <div className={clsx(styles.card_single)}>
                        <div className={clsx(styles.card_flex)}>
                            <div className={clsx(styles.card_info)}>
                                <div className={clsx(styles.card_head)}>
                                    <span>Doanh thu</span>
                                    <small>Danh thu trong 1 ngày </small>
                                </div>
                                <h2>$6k</h2>
                                <small>Incone</small>
                            </div>
                            <div className={clsx(styles.card_chart)}>
                                <FontAwesomeIcon
                                    className={clsx(styles.primary, styles.chart_icon)}
                                    icon={faCircleDollarToSlot}
                                />
                            </div>
                        </div>
                    </div>
                </Button>
            </div>
        </>
    );
}

export default Main;
