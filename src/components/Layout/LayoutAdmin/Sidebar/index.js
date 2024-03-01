import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Sidebar.module.scss';
import Button from '@/components/Button';
import {
    faBagShopping,
    faBell,
    faChartSimple,
    faContactBook,
    faRightToBracket,
    faTruck,
    faUser,
    faUserCircle,
    faWarehouse,
} from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import images from '@/assets/images';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/config-api';

function Sidebar() {
    const navigate = useNavigate();
    const [admin, setAdmin] = useState('');

    useEffect(() => {
        const admin_id = sessionStorage.getItem('_id');
        const fetchData = async () => {
            try {
                if (admin_id) {
                    const respones = await axios.get(`${api.admin}?adminId=${admin_id}`);
                    const data = respones.data;
                    setAdmin(data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const handleLogout = () => {
        sessionStorage.removeItem('id');
        sessionStorage.removeItem('roles');
        navigate('/login');
    };
    return (
        <>
            <div className={clsx(styles.sidebar_brand)}>
                <div className={clsx(styles.brand_flex)}>
                    <Button to={'/admin'}>
                        <img src={images.logo} width={120} alt="avatar" />
                    </Button>

                    <div className={clsx(styles.brand_icons)}>
                        <FontAwesomeIcon icon={faBell} />
                        <FontAwesomeIcon icon={faUserCircle} />
                    </div>
                </div>
            </div>

            <div className={clsx(styles.sidebar_main)}>
                <div className={clsx(styles.sidebar_user)}>
                    <img src={admin.avatar} className={clsx(styles.image)} alt="avatar user" />
                    <div>
                        <h3 className={clsx(styles.name)}>{admin.name}</h3>
                        <span className={clsx(styles.email)}> {admin.email}</span>
                    </div>
                </div>

                <div className={clsx(styles.sidebar_menu)}>
                    <div className={clsx(styles.menu_head)}>
                        <span>Khách hàng</span>
                    </div>
                    <ul>
                        <li>
                            <Button to={'/admin/account'} className={clsx(styles.scaleBalanced, styles.li_a)}>
                                <FontAwesomeIcon className={clsx(styles.icons)} icon={faUser} />
                                Tài khoản
                            </Button>
                        </li>
                        <li>
                            <Button to={'/admin/contact'} className={clsx(styles.ChartPie, styles.li_a)}>
                                <FontAwesomeIcon className={clsx(styles.icons)} icon={faContactBook} />
                                Liên hệ
                            </Button>
                        </li>
                    </ul>
                    {/* {} */}
                    <div className={clsx(styles.menu_head)}>
                        <span>Đơn hàng và sản phẩm</span>
                    </div>
                    <ul>
                        <li>
                            <Button to={'/admin/ware-house'} className={clsx(styles.faCalendar, styles.li_a)}>
                                <FontAwesomeIcon className={clsx(styles.icons)} icon={faWarehouse} />
                                Kho hàng
                            </Button>
                        </li>
                        <li>
                            <Button to={'/admin/order'} className={clsx(styles.faUsers, styles.li_a)}>
                                <FontAwesomeIcon className={clsx(styles.icons)} icon={faBagShopping} />
                                Đơn hàng
                            </Button>
                        </li>
                        <li>
                            <Button to={'/admin/notification'} className={clsx(styles.faEnvelope, styles.li_a)}>
                                <FontAwesomeIcon className={clsx(styles.icons)} icon={faBell} />
                                Thông báo
                            </Button>
                        </li>
                        <li>
                            <Button to={'/admin/shippement'} className={clsx(styles.faShoppingCart, styles.li_a)}>
                                <FontAwesomeIcon className={clsx(styles.icons)} icon={faTruck} />
                                Vận chuyển và sửa chữa
                            </Button>
                        </li>
                        <li>
                            <Button
                                to={'/admin/reports-statistics'}
                                className={clsx(styles.faCheckCircle, styles.li_a)}
                            >
                                <FontAwesomeIcon className={clsx(styles.icons)} icon={faChartSimple} />
                                <span className="las la-check-circle"></span>
                                Báo cáo và thông kê
                            </Button>
                        </li>
                    </ul>
                </div>
                <div className={clsx(styles.log_out)}>
                    <Button className={clsx(styles.btn_log_out)} onClick={handleLogout}>
                        <span>ĐĂNG XUẤT</span>
                        <FontAwesomeIcon icon={faRightToBracket} />
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
