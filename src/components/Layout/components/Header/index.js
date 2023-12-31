// import { Routes, Route } from 'react-router-dom';
import { useRef, useState } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartShopping,
    faCircleQuestion,
    faCircleXmark,
    faMagnifyingGlass,
    // faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import Button from '@/components/Button';
import styles from './Header.module.scss';
import images from '@/assets/images';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Header() {
    const [search, setSearch] = useState('');
    const handleClear = () => {
        setSearch('');
        ref.current.focus();
    };
    const ref = useRef();

    const currentUser = true;
    return (
        <header className={clsx(styles.wrapper)}>
            <div className={clsx(styles.navbar_top)}>
                <nav className={styles.navbar}>
                    <div className={clsx(styles.center, styles.inner)}>
                        <div className={clsx(styles.shop_drawer)} id={clsx(styles.drawer_id_0)}>
                            <Button to="/fridge">Tải ứng dụng</Button>
                        </div>
                        <div className={clsx(styles.flex, styles.connect_fb)}>
                            <Button to="/fridge" rightIcon={<FontAwesomeIcon icon={faFacebook} />}>
                                Kết nối
                            </Button>
                        </div>
                        <div className={clsx(styles.notification)}>
                            <Button to="/fridge" rightIcon={<FontAwesomeIcon icon={faBell} />}>
                                Thông báo
                            </Button>
                        </div>
                        <div className={clsx(styles.support)}>
                            <Button to="/fridge" rightIcon={<FontAwesomeIcon icon={faCircleQuestion} />}>
                                Hỗ trợ
                            </Button>
                        </div>
                        <div className={clsx(styles.navbar__spacer)}></div>

                        <div className={clsx(styles.action)}>
                            {currentUser ? (
                                <>
                                    <img
                                        src={images.avatar_null}
                                        alt="NVA"
                                        className={clsx(styles.avatar)}
                                        width={30}
                                    />
                                </>
                            ) : (
                                <>
                                    <div className={clsx(styles.register)}>
                                        <Button>Đăng ký</Button>
                                    </div>
                                    <div className={clsx(styles.login)}>
                                        <Button>Đăng nhập</Button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
            <div className={clsx(styles.navbar_center)}>
                <div className={clsx(styles.logo)}>
                    <img src={images.logo} alt="logo" />
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
                    <button type="button" className={clsx(styles.btn, styles.btn_solid_primary, styles.btn_search)}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <div className={clsx(styles.cart)}>
                    <button className={clsx(styles.btn_cart)}>
                        <FontAwesomeIcon className={clsx(styles.icon_cart)} icon={faCartShopping} />
                    </button>
                </div>
            </div>
            <div className={clsx(styles.navbar_bottom)}>
                <div className={clsx(styles.list_a)}>
                    <ul className={clsx(styles.category)}>
                        <li className={clsx(styles.nav_item)}>
                            <Button to="/fridge">Tủ lạnh</Button>
                        </li>
                        <li className={clsx(styles.nav_item)}>
                            <Button to="/washing">Máy giặt</Button>
                        </li>
                        <li className={clsx(styles.nav_item)}>
                            <Button to="/conditioner">Máy điều hòa</Button>
                        </li>
                        <li className={clsx(styles.nav_item)}>
                            <Button to="/purifier">Lọc nước</Button>
                        </li>
                        <li className={clsx(styles.nav_item)}>
                            <Button to="/cooker">Nồi cơm điện</Button>
                        </li>
                        <li className={clsx(styles.nav_item)}>
                            <Button to="/dried-dough">Nồi chiên</Button>
                        </li>
                        <li className={clsx(styles.nav_item)}>
                            <Button to="/stove">Bếp điện</Button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
