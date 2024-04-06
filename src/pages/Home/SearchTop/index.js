import clsx from 'clsx';
import styles from './SearchTop.module.scss';
import Button from '@/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import  axios  from 'axios';
import api from '@/config-api';
function SearchTop() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${api.searTop}`);
                const data = response.data;
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    },[]);
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.search_top_header)}>
                <div className={clsx(styles.ml - 2)}>
                    <span style={{ color: 'red', margin: 'auto auto auto 10px' }}>TÌM KIẾM HÀNG ĐẦU</span>
                </div>
                <div className={clsx(styles.flex_1)}></div>
                <Button href="/thu">
                    <Button className={clsx(styles.black)} rightIcon={<FontAwesomeIcon icon={faArrowAltCircleRight} />}>
                        Xem tất cả &nbsp;
                    </Button>
                </Button>
            </div>
            <div className={clsx(styles.search_top_bottom)}>
                <div className={clsx(styles.list_items)}>
                    <ul className={clsx(styles.image_carousel_item_list_ul)}>
                        {products.map((product, index) => (
                            <li key={index} className={clsx(styles.image_carousel_item_li)}>
                                <Button to={`/detail-product?id=${product.id}`}>
                                    <img
                                        src={`${product.image}`}
                                        alt={`${product.kind}`}
                                        className={clsx(styles.image_top_search)}
                                    />
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SearchTop;
