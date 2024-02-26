import clsx from 'clsx';
import styles from './Comments.module.scss';
import { useEffect, useState } from 'react';
import FormComment from './FormComment';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import api from '@/config-api';
import axios from 'axios';
function Comments({ product }) {
    const RatingIcon = ({ filled }) => <span className="icon">{filled ? '★' : '☆'}</span>;
    const [showForm, setShowForm] = useState(false);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState([]);
    const [fillterStar, setFillterStar] = useState(0);

    const ProductRating = ({ rating }) => {
        const filledStars = Math.floor(rating);
        const hasHalfStar = rating - filledStars >= 0.5;

        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < filledStars) {
                stars.push(<RatingIcon key={i} filled />);
            } else if (i === filledStars && hasHalfStar) {
                stars.push(
                    <span key={i} className="icon">
                        <span>&#9733;</span>
                    </span>,
                );
            } else {
                stars.push(<RatingIcon key={i} />);
            }
        }
        return stars;
    };
    const product_id = product ? product._id : '';
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (product_id) {
                    const response = await axios.get(
                        `${api.post_comment}?product_id=${product_id}&fillterStar=${fillterStar}`,
                    );
                    setComments(response.data);
                }
            } catch (error) {
                console.log('lỗi trang comment', error);
            }
        };
        fetchData();
    }, [product_id, fillterStar]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (product_id) {
                    const response = await axios.get(`${api.post_comment}?product_id=${product_id}&fillterStar=0`);
                    setComment(response.data);
                }
            } catch (error) {
                console.log('lỗi trang comment', error);
            }
        };
        fetchData();
    }, [product_id, fillterStar]);

    const handleMediumStar = (comments) => {
        let total = 0;
        for (let i = 0; i < comments.length; i++) {
            total += comments[i].number_star;
        }
        return total / comments.length;
    };
    const handleStarClick = (starValue) => {
        setFillterStar(starValue);
    };

    const quantityStar = (comments, number) => {
        let total = 0;
        for (let i = 0; i < comments.length; i++) {
            if (comments[i].number_star === number) {
                total += 1;
            }
        }
        return total;
    };
    return (
        <div className={clsx(styles.wrapper, showForm ? styles.dark : '')}>
            <div className={clsx(styles.head_comment)}>
                <div className={clsx(styles.text_comment)}>ĐÁNH GIÁ SẢN PHẨM</div>
                <div className={clsx(styles.filter_with_star)}>
                    <div className={clsx(styles.row, 'row')}>
                        <div className={clsx(styles.row, 'col-sm-3')}>
                            <div className={styles.medium_number_star}>
                                <p>{handleMediumStar(comments).toFixed(1).toString()}/5</p>
                            </div>
                            <div style={{ color: '#d0011b', textAlign: 'center' }}>
                                {ProductRating({ rating: handleMediumStar(comments) })}
                            </div>
                        </div>
                        <div className={clsx(styles.row, 'col-sm-9')}>
                            <div className={clsx(styles.fillter_star)}>
                                <div className={clsx(styles.all, styles.star)} onClick={() => handleStarClick(0)}>
                                    Tất cả {comment.length}
                                </div>
                                <div className={clsx(styles.five_star, styles.star)} onClick={() => handleStarClick(5)}>
                                    5 Sao {quantityStar(comment, 5)}
                                </div>
                                <div className={clsx(styles.four_star, styles.star)} onClick={() => handleStarClick(4)}>
                                    4 Sao {quantityStar(comment, 4)}
                                </div>
                                <div
                                    className={clsx(styles.three_star, styles.star)}
                                    onClick={() => handleStarClick(3)}
                                >
                                    3 Sao {quantityStar(comment, 3)}
                                </div>
                                <div className={clsx(styles.two_star, styles.star)} onClick={() => handleStarClick(2)}>
                                    2 Sao {quantityStar(comment, 2)}
                                </div>
                                <div className={clsx(styles.one_star, styles.star)} onClick={() => handleStarClick(1)}>
                                    1 Sao {quantityStar(comment, 1)}
                                </div>
                            </div>
                            <div className={clsx(styles.total)}>
                                <div className={clsx(styles.total_comments)}>5</div>
                                <div className={clsx(styles.total_image)}>20</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {comments.map((comment, index) => (
                <div key={index} className={clsx(styles.main_comments)}>
                    <div className={clsx(styles.row, 'row')}>
                        <div className={clsx(styles.col_1, 'col-sm-1')}>
                            <img
                                src={`${comment.user_id.avatar}`}
                                alt="avatar"
                                width={50}
                                style={{ borderRadius: '50%' }}
                            />
                        </div>
                        <div className={clsx(styles.col_1, 'col-sm-11')}>
                            <div className={clsx(styles.name)}>{`${comment.user_id.name}`}</div>
                            <div className={clsx(styles.number_stars)}>
                                {ProductRating({ rating: comment.number_star })}
                            </div>
                            <div className={clsx(styles.date)}>{comment.comment_date}</div>
                        </div>
                    </div>
                    <div className={clsx(styles.row, 'row')}>
                        <div className={clsx(styles.col_1, 'col-sm-1')}></div>
                        <div className={clsx(styles.col_1, 'col-sm-11')}>
                            <div className={clsx(styles.text_comment)}>{comment.comment_text}</div>
                        </div>
                    </div>
                    <div className={clsx(styles.row, 'row')}>
                        <div className={clsx(styles.col_1, 'col-sm-1')}></div>
                        <div className={clsx(styles.col_1, 'col-sm-11')}>
                            <div className={clsx(styles.list_images)}>
                                {comment.image ? (
                                    <>
                                        <img src={`${comment.image}`} alt="hinh_anh" />
                                    </>
                                ) : (
                                    ''
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className={clsx(styles.show_and_add)}>
                <div className={clsx(styles.show_all)}>Xem thêm</div>
                <div className={clsx(styles.write_comment)} onClick={() => setShowForm(!showForm)}>
                    Viết đánh giá
                </div>
            </div>
            {showForm ? (
                <div className={clsx(styles.form_comment)}>
                    <div className={clsx(styles.delete_form)} onClick={() => setShowForm(!showForm)}>
                        <FontAwesomeIcon icon={faXmarkCircle} />
                    </div>
                    <FormComment product={product} />
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}

export default Comments;
