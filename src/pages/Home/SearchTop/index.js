import clsx from 'clsx';
import styles from './SearchTop.module.scss';
import Button from '@/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
function SearchTop() {
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
                        <li className={clsx(styles.image_carousel_item_li)}>
                            <Button>
                                <img
                                    src="https://down-vn.img.susercontent.com/file/31e1336a621325c970498b2a3b598d2a"
                                    alt="nồi cơm"
                                    className={clsx(styles.image_top_search)}
                                />
                            </Button>
                        </li>
                        <li className={clsx(styles.image_carousel_item_li)}>
                            <Button>
                                <img
                                    src="https://down-vn.img.susercontent.com/file/31e1336a621325c970498b2a3b598d2a"
                                    alt="nồi cơm"
                                    className={clsx(styles.image_top_search)}
                                />
                            </Button>
                        </li>
                        <li className={clsx(styles.image_carousel_item_li)}>
                            <Button>
                                <img
                                    src="https://down-vn.img.susercontent.com/file/31e1336a621325c970498b2a3b598d2a"
                                    alt="nồi cơm"
                                    className={clsx(styles.image_top_search)}
                                />
                            </Button>
                        </li>
                        <li className={clsx(styles.image_carousel_item_li)}>
                            <Button>
                                <img
                                    src="https://down-vn.img.susercontent.com/file/31e1336a621325c970498b2a3b598d2a"
                                    alt="nồi cơm"
                                    className={clsx(styles.image_top_search)}
                                />
                            </Button>
                        </li>
                        <li className={clsx(styles.image_carousel_item_li)}>
                            <Button>
                                <img
                                    src="https://down-vn.img.susercontent.com/file/31e1336a621325c970498b2a3b598d2a"
                                    alt="nồi cơm"
                                    className={clsx(styles.image_top_search)}
                                />
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SearchTop;
