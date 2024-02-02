import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Sidebar.module.scss';
import Button from '@/components/Button';
import {
    faBagShopping,
    faBell,
    faChartSimple,
    faContactBook,
    faTruck,
    faUser,
    faUserCircle,
    faWarehouse,
} from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

function Sidebar() {
    return (
        <>
            <div className={clsx(styles.sidebar_brand)}>
                <div className={clsx(styles.brand_flex)}>
                    <img
                        src="https://inkythuatso.com/uploads/thumbnails/800/2023/03/9-anh-dai-dien-trang-inkythuatso-03-15-27-03.jpg"
                        width={30}
                        alt="avatar"
                    />

                    <div className={clsx(styles.brand_icons)}>
                        <FontAwesomeIcon icon={faBell} />
                        <FontAwesomeIcon icon={faUserCircle} />
                    </div>
                </div>
            </div>

            <div className={clsx(styles.sidebar_main)}>
                <div className={clsx(styles.sidebar_user)}>
                    <img
                        src="https://inkythuatso.com/uploads/thumbnails/800/2023/03/9-anh-dai-dien-trang-inkythuatso-03-15-27-03.jpg"
                        className={clsx(styles.image)}
                        alt="avatar user"
                    />
                    <div>
                        <h3 className={clsx(styles.name)}>Tên</h3>
                        <span className={clsx(styles.email)}> gmail.com</span>
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
                            <Button to={'/admin/shippement'} className={clsx(styles.faShoppingCart, styles.li_a)}>
                                <FontAwesomeIcon className={clsx(styles.icons)} icon={faTruck} />
                                Vận chuyển
                            </Button>
                        </li>
                        <li>
                            <Button to={'/admin/notification'} className={clsx(styles.faEnvelope, styles.li_a)}>
                                <FontAwesomeIcon className={clsx(styles.icons)} icon={faBell} />
                                Thông báo
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
            </div>
        </>
    );
}

export default Sidebar;
