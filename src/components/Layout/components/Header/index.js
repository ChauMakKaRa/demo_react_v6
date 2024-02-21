import { Fragment, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCaretDown,
    faCartArrowDown,
    faCartShopping,
    faCircleQuestion,
    faCircleXmark,
    faHammer,
    faMagnifyingGlass,
    faRightFromBracket,
    faUser,
    // faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import Button from '@/components/Button';
import styles from './Header.module.scss';
import images from '@/assets/images';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import api from '@/config-api';

function Header() {
    const [notifications, setNotifications] = useState([]);

    const [search, setSearch] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [quantityNotification, setQuantityNotification] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const [user, setUser] = useState('');

    const ref = useRef();
    const handleClear = () => {
        setSearch('');
        ref.current.focus();
    };

    const logged = sessionStorage.getItem('id');
    if (logged) {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${api.cart}?user_id=${logged}`);
                const data = response.data;
                setQuantity(data[0].item.length);
            } catch (error) {
                setQuantity(0);
            }
        };
        const fetchNotification = async () => {
            const user_id = sessionStorage.getItem('_id');
            try {
                const respones = await axios.get(`${api.notification}?user_id=${user_id}`);
                const data = respones.data;
                setQuantityNotification(data.length);
                setNotifications(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchNotification();
        fetchData();
    }
    const handleLogOut = () => {
        sessionStorage.removeItem('id');
        sessionStorage.removeItem('roles');
        navigate('/login');
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        const id_user = sessionStorage.getItem('_id');
        const fetchData = async () => {
            try {
                if (id_user) {
                    const respones = await axios.get(`${api.user}?userId=${id_user}`);
                    const data = respones.data;
                    setUser(data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const time = (stringTime) => {
        const date = new Date(stringTime);
        const time = date.toLocaleTimeString('en-US', { hour12: false });
        return time;
    };
    return (
        <header className={clsx(styles.wrapper)}>
            <div className={clsx(styles.navbar_top)}>
                <nav className={styles.navbar}>
                    <div className={clsx(styles.center, styles.inner)}>
                        <div className={clsx(styles.shop_drawer)} id={clsx(styles.drawer_id_0)}>
                            <Button to="/register-for-repair" rightIcon={<FontAwesomeIcon icon={faHammer} />}>
                                Sửa chữa
                            </Button>
                        </div>
                        <div className={clsx(styles.flex, styles.connect_fb)}>
                            <Button to="/contact" rightIcon={<FontAwesomeIcon icon={faFacebook} />}>
                                Liên hệ
                            </Button>
                        </div>
                        <div className={clsx(styles.notification)}>
                            <Button to="/my-account/notification" rightIcon={<FontAwesomeIcon icon={faBell} />}>
                                Thông báo
                            </Button>
                            <span className={clsx(styles.quantity_notification)}>{quantityNotification}</span>
                            <div className={clsx(styles.list_notifications)}>
                                {notifications.map((notification, index) => (
                                    <Fragment key={index}>
                                        {!notification.read_status ? (
                                            <Button
                                                to={`/my-account/notification?key=${notification._id}`}
                                                style={{ color: '#000' }}
                                            >
                                                <div className={clsx(styles.title)}>{notification.title}</div>
                                                <div className={clsx(styles.time)}>
                                                    <i>{time(notification.createdAt)}</i>
                                                </div>
                                            </Button>
                                        ) : (
                                            <Button
                                                to={`/my-account/notification?key=${notification._id}`}
                                                style={{ color: '#000' }}
                                            >
                                                <div className={clsx(styles.title)}>{notification.title}</div>
                                                <div className={clsx(styles.time)}>
                                                    <i>{time(notification.createdAt)}</i>
                                                </div>
                                            </Button>
                                        )}
                                    </Fragment>
                                ))}
                            </div>
                        </div>
                        <div className={clsx(styles.support)}>
                            <Button to="/support" rightIcon={<FontAwesomeIcon icon={faCircleQuestion} />}>
                                Hỗ trợ
                            </Button>
                        </div>
                        <div className={clsx(styles.navbar__spacer)}></div>

                        <div className={clsx(styles.action)}>
                            {logged ? (
                                <>
                                    <span style={{ margin: 'auto 0' }}>{sessionStorage.getItem('email')}</span>
                                    <img
                                        src={user.avatar}
                                        alt="NVA"
                                        className={clsx(styles.avatar)}
                                        width={30}
                                        height={30}
                                    />
                                    <Button
                                        className={clsx(styles.dropdown_togger)}
                                        onClick={() => setIsOpen(!isOpen)}
                                        style={{
                                            backgroundColor: 'rgb(29, 8, 222)',
                                            color: 'white',
                                            marginLeft: '5px',
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faCaretDown} />
                                    </Button>
                                    {isOpen && (
                                        <div className={clsx(styles.dropdown_menu_opption)}>
                                            <Button to="/my-account" className={clsx(styles.dropdown_menu)}>
                                                <span style={{ color: 'black' }}>Tài khoản</span>
                                                <FontAwesomeIcon
                                                    style={{ marginLeft: '10px', color: '#fe2c55' }}
                                                    icon={faUser}
                                                />
                                            </Button>
                                            <Button to="/ordered" className={clsx(styles.dropdown_menu)}>
                                                <span style={{ color: 'black' }}> Đơn hàng</span>
                                                <FontAwesomeIcon
                                                    style={{ marginLeft: '10px', color: '#fe2c55' }}
                                                    icon={faCartArrowDown}
                                                />
                                            </Button>
                                            <Button className={clsx(styles.dropdown_menu)} onClick={handleLogOut}>
                                                <span style={{ color: 'black' }}>Đăng xuất</span>

                                                <FontAwesomeIcon
                                                    style={{ marginLeft: '10px', color: '#fe2c55' }}
                                                    icon={faRightFromBracket}
                                                />
                                            </Button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <>
                                    <div className={clsx(styles.register)}>
                                        <Button to="/register">Đăng ký</Button>
                                    </div>
                                    <div className={clsx(styles.login)}>
                                        <Button to="/login">Đăng nhập</Button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
            <div className={clsx(styles.navbar_center)}>
                <div className={clsx(styles.logo)}>
                    <Button to="/">
                        <img src={images.logo} alt="logo" />
                    </Button>
                </div>
                <div className={clsx(styles.search)}>
                    <input
                        ref={ref}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className={clsx(styles.input_search)}
                        placeholder="Nhập tên sản phẩm cần tìm kiếm..."
                    />
                    <button type="button" onClick={handleClear} className={clsx(styles.clear)}>
                        {search && <FontAwesomeIcon icon={faCircleXmark} />}
                    </button>
                    {search ? (
                        <Button
                            href={`/search?keyword=${search}`}
                            style={{ padding: '10px', color: 'blue' }}
                            className={clsx(styles.btn, styles.btn_solid_primary, styles.btn_search)}
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </Button>
                    ) : (
                        <Button
                            style={{ padding: '10px 25px 10px 10px', color: 'blue' }}
                            className={clsx(styles.btn, styles.btn_solid_primary, styles.btn_search)}
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </Button>
                    )}
                </div>

                <div className={clsx(styles.cart)}>
                    <Button to="/cart" className={clsx(styles.btn_cart)}>
                        <FontAwesomeIcon className={clsx(styles.icon_cart)} icon={faCartShopping} />
                        <span className={clsx(styles.quantity_product)}>{quantity}</span>
                    </Button>
                </div>
            </div>
            <div className={clsx(styles.navbar_bottom)}>
                <div className={clsx(styles.list_a)}>
                    <ul className={clsx(styles.category)}>
                        <li className={clsx(styles.nav_item)}>
                            <Button href="/detail?key=Tủ lạnh">Tủ lạnh</Button>
                        </li>
                        <li className={clsx(styles.nav_item)}>
                            <Button href="/detail?key=Máy giặt">Máy giặt</Button>
                        </li>
                        <li className={clsx(styles.nav_item)}>
                            <Button href="/detail?key=Điều hòa">Máy điều hòa</Button>
                        </li>
                        <li className={clsx(styles.nav_item)}>
                            <Button href="/detail?key=Lọc nước">Lọc nước</Button>
                        </li>
                        <li className={clsx(styles.nav_item)}>
                            <Button href="/detail?key=Nồi cơm">Nồi cơm điện</Button>
                        </li>
                        <li className={clsx(styles.nav_item)}>
                            <Button href="/detail?key=Nồi chiên">Nồi chiên</Button>
                        </li>
                        <li className={clsx(styles.nav_item)}>
                            <Button href="/detail?key=Bếp điện">Bếp điện</Button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
