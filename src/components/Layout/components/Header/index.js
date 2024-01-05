import { Routes, Route } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('navbar-wrapper container-wrapper navbar-top')}>
                <nav className={cx('container navbar')}>
                    <div className={cx('flex v-center')}>
                        <div className={cx('shop-drawer')} id={cx('pc-drawer-id-0')}>
                            <a href="/">tải ứng dụng</a>
                            {/* <Routes>
                                <Route />
                            </Routes> */}
                        </div>
                    </div>
                </nav>
            </div>
            <div className={cx('navbar navbar--top')}>top</div>
        </header>
    );
}

export default Header;
