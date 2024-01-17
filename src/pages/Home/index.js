import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import api from '../../config-api';
import styles from './Home.module.scss';
import Carousel from './Carousel';
import Image from './Carousel/image';
import SearchTop from './SearchTop';
import NewProduct from './NewProduct';
import Suggest from './Suggest';
import { faUpLong } from '@fortawesome/free-solid-svg-icons';
function Home() {
    const [products, setProducts] = useState([]);
    const [showGoToTop, setShowGoToTop] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(api.products);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 300);
        };
        window.addEventListener('scroll', handleScroll);
    }, []);

    const handleGoToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.home_page)}>
                <div className={clsx(styles.introduce)}>
                    <div className="row">
                        <span className={clsx(styles.null)}></span>
                    </div>
                    <div className="row">
                        <div className="col-sm-8">
                            <Carousel />
                        </div>
                        <div className="col-sm-4">
                            <Image />
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.null_color_grey)}></div>
                <div className={clsx(styles.product)}>
                    <div className={clsx(styles.top_search)}>
                        <SearchTop />
                    </div>
                </div>
                <div className={clsx(styles.latest_products)}>
                    <div className={clsx(styles.suggest)}>
                        <Suggest />
                    </div>
                    <NewProduct products={products} />
                </div>
            </div>
            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                    }}
                    onClick={handleGoToTop}
                >
                    <FontAwesomeIcon className={clsx(styles.upLong)} icon={faUpLong} />
                </button>
            )}
        </div>
    );
}

export default Home;
