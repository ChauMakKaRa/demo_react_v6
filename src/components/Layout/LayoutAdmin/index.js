import clsx from 'clsx';
import styles from './LayoutAdmin.module.scss';
import Sidebar from './Sidebar';
import HeaderAdmin from './HeaderAdmin';
import Main from './Main';

function LayoutAdmin({ children }) {
    const inputId = styles.sidebar_toggle;
    const inputIDMainContent = styles.main_toggle;
    return (
        <div className={clsx(styles.wrapper)}>
            <input type="checkbox" name="" id={inputIDMainContent} />
            <input type="checkbox" name="" id={inputId} />

            <div className={clsx(styles.sidebar)}>
                <Sidebar />
            </div>

            <div className={clsx(styles.main_content)} htmlFor={inputIDMainContent}>
                <header className={clsx(styles.header)}>
                    <HeaderAdmin inputId={inputId} />
                </header>
                <main>
                    <Main />
                    <div>{children}</div>
                </main>
            </div>
        </div>
    );
}

export default LayoutAdmin;
