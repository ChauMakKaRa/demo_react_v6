import classNames from 'classnames/bind';
import Header from '@/components/Layout/components/Header';
import styles from './DefaultLayout.module.scss';
import Footer from '../components/Footer';
// import Sidebar from './Sidebar';

const cx = classNames.bind(styles);
function DefaultLayouts({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                {/* <Sidebar /> */}
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayouts;
