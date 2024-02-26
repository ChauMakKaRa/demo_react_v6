import clsx from 'clsx';
import styles from './NewProduct.module.scss';
import Button from '@/components/Button';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

function NewProduct({ products }) {
    const [pageCounts, setPageCounts] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    const productsPerPage = 10;
    useEffect(() => {
        try {
            if (products) {
                setPageCounts(Math.ceil(products.length / productsPerPage));
            }
        } catch (error) {
            console.log(error);
        }
    }, [products]);
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };
    const offset = currentPage * productsPerPage;
    const currentProducts = products.slice(offset, offset + productsPerPage);
    const reversedProducts = currentProducts.slice().reverse();
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.list_products)}>
                {reversedProducts.map((product) => (
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

export default NewProduct;
