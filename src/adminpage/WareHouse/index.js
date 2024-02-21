import clsx from 'clsx';
import ReactPaginate from 'react-paginate';
import styles from './WareHouse.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faPen, faPlus, faRightFromBracket, faX } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/config-api';
import FormAddProduct from './FormAddProduct';

function WareHouse() {
    const [showFormRepairUser, setShowFormRepairUser] = useState(false);

    const [products, setProducts] = useState([]);
    const [pageCounts, setPageCounts] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 5;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const respones = await axios.get(`${api.products}`);
                const data = respones.data;
                setProducts(data);
                setPageCounts(Math.ceil(data.length / productsPerPage));
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const handleAddNewProduct = () => {
        setShowFormRepairUser(!showFormRepairUser);
    };
    const offset = currentPage * productsPerPage;
    const currentProducts = products.slice(offset, offset + productsPerPage);

    return (
        <div className={clsx(styles.wrapper)}>
            {showFormRepairUser && (
                <div>
                    <div className={clsx(styles.form_overlay2)} />
                    <div className={clsx(styles.form_container2)}>
                        <FontAwesomeIcon
                            className={clsx(styles.delete_form)}
                            icon={faCircleXmark}
                            onClick={() => setShowFormRepairUser(!showFormRepairUser)}
                        />
                        <div className={clsx(styles.content_add)}>Thêm sản phẩm mới</div>
                        {/* <FormRepair user={userRepair} /> */}
                        <FormAddProduct />
                    </div>
                </div>
            )}
            <div className={clsx(styles.ware_house_page)}>
                <div className={clsx(styles.head_ware_house)}>
                    <div className={clsx(styles.content_ware_house)}>
                        <h1>Hàng hóa</h1>
                    </div>
                    <div className={clsx(styles.no_content)}></div>
                    <div className={clsx(styles.search)}>
                        <input type="text" placeholder="Nhập tên sản phẩm..." />
                    </div>
                    <div className={clsx(styles.no_content)}></div>
                    <div className={clsx(styles.funtions)}>
                        <div className={clsx(styles.add)} onClick={handleAddNewProduct}>
                            <FontAwesomeIcon icon={faPlus} />
                            Thêm mới
                        </div>
                        <div className={clsx(styles.export_file)}>
                            <FontAwesomeIcon icon={faRightFromBracket} />
                            Xuất file
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.body_ware_house)}>
                    <div className={clsx(styles.head_table)}>
                        <div className="row">
                            <div className="col-sm-1">
                                <b>ID </b>
                            </div>
                            <div className="col-sm-3">
                                <b>Tên sản phẩm</b>
                            </div>
                            <div className="col-sm-2">
                                <b>Giá bán</b>
                            </div>
                            <div className="col-sm-2">
                                <b>Giá nhập</b>
                            </div>
                            <div className="col-sm-1">
                                <b>Tốn kho</b>
                            </div>
                            <div className="col-sm-1">
                                <b>Còn lại</b>
                            </div>
                            <div className="col-sm-1">
                                <b>Đặt hàng</b>
                            </div>
                            <div className="col-sm-1"></div>
                        </div>
                    </div>
                    <div className={clsx(styles.products)}>
                        {currentProducts.map((product, index) => (
                            <div key={index} className={clsx(styles.body_table)}>
                                <div className="row">
                                    <div className="col-sm-1">{product.id}</div>
                                    <div className="col-sm-3">{product.name}</div>
                                    <div className="col-sm-2">{product.price.toLocaleString('en-US')}đ</div>
                                    <div className="col-sm-2">{product.input_price.toLocaleString('en-US')}đ</div>
                                    <div className="col-sm-1">{product.quantity_purchased}</div>
                                    <div className="col-sm-1">{product.quantity_in_stock}</div>
                                    <div className="col-sm-1">
                                        {product.quantity_purchased - product.quantity_in_stock}
                                    </div>
                                    <div className="col-sm-1">
                                        <div className={clsx(styles.actions)}>
                                            <div className={clsx(styles.repair)}>
                                                <FontAwesomeIcon icon={faPen} className={clsx(styles.repair_icon)} />
                                            </div>
                                            <div className={clsx(styles.delete)}>
                                                <FontAwesomeIcon className={clsx(styles.delete_icon)} icon={faX} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={clsx(styles.react_paginate, 'custom-pagination-class')}>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Sau"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCounts}
                    previousLabel="Trước"
                    renderOnZeroPageCount={null}
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                />
            </div>
        </div>
    );
}

export default WareHouse;
