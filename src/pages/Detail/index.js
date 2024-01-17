import clsx from "clsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Detail.module.scss'
import api from "@/config-api";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/Button";
function Detail() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const key = urlParams.get('key');
        
        const fetchData = async () => {
            try {
                const response = await axios.get(`${api.detail}?detail=${key}`);
                setProducts(response.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.no_content)}></div>
            <div className={clsx(styles.detail)}>
                <h1 className={clsx(styles.result_find)}>
                    <FontAwesomeIcon className={clsx(styles.icon_find)} icon={faMagnifyingGlass}/>
                    Kết quả tìm kiếm: </h1>
                <div className={clsx(styles.no_content)}></div>
                <div className={clsx(styles.product_detail)}>
                    {products.map((product) => (
                        <Button to={`/detail-product?id=${product.id}`} key={product.id}  className={clsx(styles.product_list)}>
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
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Detail;