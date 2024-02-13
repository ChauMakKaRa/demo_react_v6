import clsx from 'clsx';
import styles from './NewProduct.module.scss';
import Button from '@/components/Button';

function NewProduct({ products }) {
    return (
        <div className={clsx(styles.wrapper)}>
            {products.map((product) => (
                <Button to={`/detail-product?id=${product.id}`} key={product.id}>
                    <div className={clsx(styles.product_list)}>
                        <div className={clsx(styles.item)}>
                            <div className={clsx(styles.images)}>
                                <img className={clsx(styles.image)} src={product.image} alt={product.name} />
                            </div>
                            <div className={clsx(styles.description)}>
                                <div className={clsx(styles.name)}>{product.name}</div>
                                <div className={clsx(styles.discount)}></div>
                                <div className={clsx(styles.price)}>{product.price.toLocaleString('en-US')} đ</div>
                            </div>
                        </div>
                    </div>
                </Button>
            ))}
        </div>
    );
}

export default NewProduct;
