import clsx from 'clsx';
import styles from './Comments.module.scss';
import { useEffect, useState } from 'react';
import FormComment from './FormComment';
import { faPaperPlane, faThumbsUp, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import api from '@/config-api';
import axios from 'axios';
function Comments({ product }) {
    const RatingIcon = ({ filled }) => <span className="icon">{filled ? '★' : '☆'}</span>;
    const [showForm, setShowForm] = useState(false);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState([]);
    const [fillterStar, setFillterStar] = useState(0);
    const [showInputTextReply, setShowInputTextReply] = useState('');
    const [reply, setReply] = useState('');
    const [showReplyComment, setShowReplyComment] = useState(false);

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
    const handleLike = async (id) => {
        const user_id = sessionStorage.getItem('_id');
        if (id) {
            try {
                const response = await axios.patch(`${api.post_comment}?id=${id}&user_id=${user_id}`);
                const updatedLikeCount = response.data.updatedLikeCount;
                if (updatedLikeCount !== undefined) {
                    const likeCountElement = document.getElementById(`likeCount_${id}`); // Assuming the element has an id like "likeCount_<id>"
                    if (likeCountElement) {
                        likeCountElement.innerText = updatedLikeCount;
                    }
                } else {
                    console.log('Invalid server response for updated like count');
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleInPutReply = (id) => {
        setShowInputTextReply(id);
    };

    const handleReply = async (id) => {
        console.log(reply);
        const user_id = sessionStorage.getItem('_id');
        try {
            const response = await axios.put(`${api.post_comment}?id=${id}&user_id=${user_id}&content=${reply}`);
            if (response.data.message) {
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
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
                    <div className="row" style={{ marginBottom: '10px' }}>
                        <div className="col-sm-1"></div>
                        <div className={clsx(styles.feedback, 'col-sm-11')}>
                            <div
                                className={clsx(styles.likes)}
                                onClick={() => handleLike(comment._id)}
                                style={{ display: 'flex' }}
                            >
                                <FontAwesomeIcon icon={faThumbsUp} className={clsx(styles.icon)} />

                                <div id={`likeCount_${comment._id}`}>{`${comment.like.length}`}</div>
                            </div>

                            <div className={clsx(styles.reply)} onClick={() => handleInPutReply(comment._id)}>
                                Trả lời
                            </div>
                        </div>
                    </div>
                    {showReplyComment === false ? (
                        <></>
                    ) : (
                        <>
                            {comment.reply.length === 0 ? (
                                <></>
                            ) : (
                                <>
                                    {comment.reply.map((rep, ind) => (
                                        <div key={ind}>
                                            <div className="row">
                                                <div className="col-sm-1"></div>
                                                <div
                                                    className="col-sm-11"
                                                    style={{ display: 'flex', marginBottom: '10px' }}
                                                >
                                                    <img
                                                        src={`${rep.user_id.avatar}`}
                                                        alt="avatar"
                                                        width={30}
                                                        height={30}
                                                        style={{ borderRadius: '50%' }}
                                                    />

                                                    <div className="row">
                                                        <div className="col-sm-1"></div>
                                                        <div className={clsx(styles.reply_col_11, 'col-sm-11')}>
                                                            <b>{`${rep.user_id.name}`}</b>
                                                            <div>{`${rep.content}`}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}
                        </>
                    )}
                    {comment.reply.length === 0 ? (
                        <></>
                    ) : (
                        <div className="row" style={{ marginBottom: '20px' }}>
                            <div className="col-sm-1"></div>
                            <div className="col-sm-11">
                                <i
                                    style={{ textDecoration: 'underline', cursor: 'pointer' }}
                                    onClick={() => setShowReplyComment(!showReplyComment)}
                                >
                                    Xem thêm câu trả lời
                                </i>
                            </div>
                        </div>
                    )}
                    <div className="row">
                        <div className="col-sm-1"> </div>
                        <div className="col-sm-11">
                            {showInputTextReply === comment._id ? (
                                <div style={{ display: 'flex', marginTop: '5px' }}>
                                    <input
                                        type="text"
                                        value={reply}
                                        onChange={(e) => setReply(e.target.value)}
                                        className={clsx(styles.inputReply)}
                                    />
                                    <div className={clsx(styles.btn_reply)} onClick={() => handleReply(comment._id)}>
                                        <FontAwesomeIcon icon={faPaperPlane} style={{ fontSize: '25px' }} />
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )}
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
