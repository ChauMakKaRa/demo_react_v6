import clsx from 'clsx';
import styles from './HomeAdmin.module.scss';

function HomeAdminPage() {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.home_admin_page)}>Trang chủ admin 1</div>
        </div>
    );
}

export default HomeAdminPage;
