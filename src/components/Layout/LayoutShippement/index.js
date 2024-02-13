import clsx from 'clsx';
import styles from './LayoutShippement.module.scss';
import HeaderShipper from './HeaderShipper';
function LayoutShipper({ children }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.header)}>
                <HeaderShipper />
            </div>
            <div className={clsx(styles.main)}>{children}</div>
        </div>
    );
}

export default LayoutShipper;
