import clsx from 'clsx';
import styles from './NewProduct.module.scss';

function NewProduct({ products }) {
    return (
        <div className={clsx(styles.wrapper)}>
            {products.map((product) => (
                <div key={product.id} className={clsx(styles.product_list)}>
                    <div className={clsx(styles.item)}>
                        <div className={clsx(styles.images)}>
                            <img className={clsx(styles.image)} src={product.image} alt={product.name} />
                        </div>
                        <div className={clsx(styles.description)}>
                            <div className={clsx(styles.name)}>{product.name}</div>
                            <div className={clsx(styles.discount)}></div>
                            <div className={clsx(styles.price)}>{product.price} đ</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NewProduct;
