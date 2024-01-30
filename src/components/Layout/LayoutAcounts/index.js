import clsx from 'clsx';
import Header from '../components/Header';
import styles from './LayoutAccount.module.scss';
import Sidebar from './Sidebar';
function LayoutAccount({ children }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <Header />
            <div className={clsx(styles.contents)}>
                <div className={clsx(styles.nocontent)}></div>
                <div className="row">
                    <div className="col-sm-3" style={{ backgroundColor: '#f4f4f4' }}>
                        <Sidebar />
                    </div>
                    <div className="col-sm-9">{children}</div>
                </div>
            </div>
        </div>
    );
}

export default LayoutAccount;
