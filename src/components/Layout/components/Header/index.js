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
    const logged = sessionStorage.getItem('id');
    return (
        <header className={clsx(styles.wrapper)}>
            <div className={clsx(styles.navbar_top)}>
                <nav className={styles.navbar}>
                    <div className={clsx(styles.center, styles.inner)}>
                        <div className={clsx(styles.shop_drawer)} id={clsx(styles.drawer_id_0)}>
                            <Button href="/down_load_app">Tải ứng dụng</Button>
                        </div>
                        <div className={clsx(styles.flex, styles.connect_fb)}>
                            <Button href="/connect_fb" rightIcon={<FontAwesomeIcon icon={faFacebook} />}>
                                Kết nối
                            </Button>
                        </div>
                        <div className={clsx(styles.notification)}>
                            <Button href="/notification" rightIcon={<FontAwesomeIcon icon={faBell} />}>
                                Thông báo
                            </Button>
                        </div>
                        <div className={clsx(styles.support)}>
                            <Button href="/support" rightIcon={<FontAwesomeIcon icon={faCircleQuestion} />}>
                                Hỗ trợ
                            </Button>
                        </div>
                        <div className={clsx(styles.navbar__spacer)}></div>

                        <div className={clsx(styles.action)}>
                            {logged ? (
                                <>
                                    <span style={{ margin: 'auto 0' }}>{sessionStorage.getItem('email')}</span>
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
                    <button type="button" className={clsx(styles.btn, styles.btn_solid_primary, styles.btn_search)}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <div className={clsx(styles.cart)}>
                    <Button to="/cart" className={clsx(styles.btn_cart)}>
                        <FontAwesomeIcon className={clsx(styles.icon_cart)} icon={faCartShopping} />
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
