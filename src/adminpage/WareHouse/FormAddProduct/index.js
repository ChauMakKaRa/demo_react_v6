import clsx from 'clsx';
import { useState } from 'react';
import styles from './FormAddProduct.module.scss';
import axios from 'axios';
import api from '@/config-api';
function FormAddProduct() {
    const [product, setProduct] = useState({
        name: '',
        kind: '',
        description: '',
        price: 0,
        image: '',
        quantity_in_stock: 0,
        input_price: 0,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };
    const handleAddProduct = async () => {
        try {
            const respones = await axios.post(`${api.products}`, {
                product: product,
            });
            const data = respones.data;
            console.log(data);
            if (data.message) {
                alert(data.message);
                setProduct({
                    name: '',
                    kind: '',
                    description: '',
                    price: 0,
                    image: '',
                    quantity_in_stock: 0,
                    input_price: 0,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <form className={clsx(styles.form_add_product)}>
                <div>
                    <label>Tên: </label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleInputChange}
                        placeholder="Tên sản phẩm..."
                    />
                </div>
                <div>
                    <label>Thể loại: </label>
                    <input
                        type="text"
                        name="kind"
                        value={product.kind}
                        onChange={handleInputChange}
                        placeholder="Nhóm sản phẩm"
                    />
                </div>
                <div>
                    <label>Miêu tả: </label>
                    <input
                        type="text"
                        name="description"
                        value={product.description}
                        onChange={handleInputChange}
                        placeholder="Miêu tả cách dùng"
                    />
                </div>
                <div>
                    <label>Giá bán: </label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleInputChange}
                        placeholder="Giá nhập(đồng)"
                    />
                </div>
                <div>
                    <label>Link ảnh: </label>
                    <input
                        type="text"
                        name="image"
                        value={product.image}
                        onChange={handleInputChange}
                        placeholder="đường dẫn ảnh..."
                    />
                </div>
                <div>
                    <label>Số lượng nhập: </label>
                    <input
                        type="number"
                        name="quantity_in_stock"
                        value={product.quantity_in_stock}
                        onChange={handleInputChange}
                        placeholder="Số lượng nhập vào..."
                    />
                </div>
                <div>
                    <label>Giá nhập: </label>
                    <input
                        type="number"
                        name="input_price"
                        value={product.input_price}
                        onChange={handleInputChange}
                        placeholder="Giá nhập(đồng)"
                    />
                </div>
                <button type="button" onClick={handleAddProduct}>
                    Thêm sản phẩm
                </button>
            </form>
        </div>
    );
}

export default FormAddProduct;
