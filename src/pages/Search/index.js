import clsx from 'clsx';
import styles from './Search.module.scss';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/config-api';
import Button from '@/components/Button';
function ResultSearch() {
    const [products, setProducts] = useState([]);
    let query = new URLSearchParams(useLocation().search);
    let keysearch = query.get('keyword');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${api.search}?key=${keysearch}`);
                const data = response.data;
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [keysearch]);
    return (
        <div className={clsx(styles.result_search_page)}>
            <div className={clsx(styles.content_search)}>
                <h1>Kết quả tìm kiếm: {keysearch}</h1>
            </div>

            <div className={clsx(styles.list_product)}>
                {products.map((product) => (
                    <Button
                        to={`/detail-product?id=${product.id}`}
                        key={product.id}
                        className={clsx(styles.btn_product)}
                    >
                        <div className={clsx(styles.product_list)}>
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
                    </Button>
                ))}
            </div>
        </div>
    );
}

export default ResultSearch;
