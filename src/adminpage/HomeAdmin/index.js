import clsx from 'clsx';
import styles from './HomeAdmin.module.scss';

function HomeAdminPage() {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.home_admin_page)}>
                <div className={clsx(styles.row, 'row')}>
                    <div className={clsx(styles.col, 'col-sm-8')}>sản phẩm</div>
                    <div className={clsx(styles.col, 'col-sm-4')}>khách hàng</div>
                </div>
            </div>
        </div>
    );
}

export default HomeAdminPage;
