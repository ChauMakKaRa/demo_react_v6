import clsx from 'clsx';
import styles from './Order.module.scss';
function ListOrder() {
    return (
        <div className={clsx(styles.list_order_page)}>
            <div>Page Order</div>
        </div>
    );
}

export default ListOrder;
