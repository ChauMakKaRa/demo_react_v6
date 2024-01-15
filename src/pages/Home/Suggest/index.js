import clsx from 'clsx';
import styles from './Suggest.module.scss';
function Suggest() {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.content)}>SẢN PHẨM MỚI NHẤT</div>
            <div className={clsx(styles.underlined)}></div>
        </div>
    );
}

export default Suggest;
