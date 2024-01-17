import clsx from 'clsx';
import styles from './DetailProduct.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/config-api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/Button';
function DetailProduct() {
    const [count, setCount] = useState(1);
    const [product, setProduct] = useState('');
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        const fetchData = async () => {
            try {
                const response = await axios.get(`${api.detail_product}?id=${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleReduce = () => {
        setCount(count - 1);
    };

    const handleIncrease = () => {
        setCount(count + 1);
    };
    if (typeof product.price === 'number') {
        var formattedNumber = product.price.toLocaleString('en-US');
    }

    const handleAddToCart = async (id) => {
        try {
            await axios.post(`${api.add_to_cart}?quantity=${count}&id=${id}`);
            console.log(count, id);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.content_detail)}>CHI TIẾT SẢN PHẨM: {product.name}</div>
            <div className={clsx(styles.detail_product)}>
                <div className={clsx(styles.left)}>
                    <div className={clsx(styles.image)}>
                        <img width={450} height={450} src={product.image} alt={product.name} />
                    </div>
                </div>
                <div className={clsx(styles.bettwen)}> </div>
                <div className={clsx(styles.right)}>
                    <div className={clsx(styles.id_name)}>
                        <h1>
                            [ Mã {product.id} ] {product.name}
                        </h1>
                    </div>
                    <div className={clsx(styles.no_content)}></div>
                    <div className="row">
                        <div className="row">
                            <div className="col-sm-3">Giá:</div>
                            <div className="col-sm-9">{formattedNumber}đ</div>
                        </div>
                        <div className={clsx(styles.no_content)}></div>

                        <div className="row">
                            <div className="col-sm-3">Lưu Ý: </div>
                            <div className="col-sm-9">{product.discription}</div>
                        </div>
                        <div className={clsx(styles.no_content)}></div>

                        <div className="row">
                            <div className="col-sm-3">Vận Chuyển: </div>
                            <div className="col-sm-9">Phí {(30000).toLocaleString('en-US')}đ vận chuyển toàn quốc</div>
                        </div>
                    </div>

                    <div className={clsx(styles.no_contentx3)}></div>
                    <div className={clsx(styles.quantity_purchased)}>
                        <div className="row">
                            <div className="col-sm-2 fs-3 my-auto">Số lượng: </div>
                            <div className="col-sm-4 ">
                                <Button className={clsx(styles.reduce)} onClick={handleReduce}>
                                    -
                                </Button>
                                <input
                                    className={clsx(styles.input_count)}
                                    value={count}
                                    onChange={(e) => setCount(e.target.value)}
                                />
                                <Button className={clsx(styles.increase)} onClick={handleIncrease}>
                                    +
                                </Button>
                            </div>
                            <div className="col-sm-6 fs-3 my-auto">{product.quantity_purchased} sản phẩm có sẵn</div>
                        </div>
                    </div>
                    <div className={clsx(styles.no_content)}></div>

                    <div className={clsx(styles.pay)}>
                        <Button onClick={() => handleAddToCart(product.id)} className={clsx(styles.add_to_cart)}>
                            <FontAwesomeIcon icon={faCartShopping} />
                            Thêm vào giỏ hàng
                        </Button>
                        <Button className={clsx(styles.btn_buy_now)}> Mua ngay</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailProduct;
