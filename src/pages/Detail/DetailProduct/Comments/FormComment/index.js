import clsx from 'clsx';
import styles from './FormComment.module.scss';
import { useState } from 'react';
import StarRatings from 'react-star-ratings';
import axios from 'axios';
import api from '@/config-api';
import { useNavigate } from 'react-router-dom';
function FormComment({ product }) {
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [reviewImage, setReviewImage] = useState(null);

    const navigate = useNavigate();

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleTextChange = (event) => {
        setReviewText(event.target.value);
    };

    const handleImageChange = (event) => {
        setReviewImage(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (sessionStorage.getItem('_id')) {
                const response = await axios.post(`${api.post_comment}`, {
                    rating: rating,
                    reviewText: reviewText,
                    reviewImage: reviewImage,
                    product_id: product._id,
                    user_id: sessionStorage.getItem('_id'),
                });
                const data = response.data;
                alert(data.message);
                window.location.reload();
            } else {
                navigate('/login');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={clsx(styles.form_comment)}>
            <form onSubmit={handleSubmit}>
                <div className={clsx(styles.product)}>
                    <img src={`${product.image}`} alt="hinh_san_pham" height={190} />
                    <p>{product.name}</p>
                </div>
                <div>
                    <label>Đánh giá sao:(bắt buộc)</label>
                    <div className="text-center">
                        <StarRatings
                            rating={rating}
                            starRatedColor="yellow"
                            changeRating={handleRatingChange}
                            numberOfStars={5}
                            name="rating"
                        />
                    </div>
                </div>
                <div>
                    <label>Nội dung đánh giá:(bắt buộc)</label>
                    <textarea value={reviewText} onChange={handleTextChange} />
                </div>
                <div>
                    <label>Hình ảnh:</label>
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                </div>
                <button className={clsx(styles.btn_)} type="submit">
                    Gửi đánh giá
                </button>
            </form>
        </div>
    );
}

export default FormComment;
