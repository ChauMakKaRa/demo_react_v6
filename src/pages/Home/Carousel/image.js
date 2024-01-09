import clsx from 'clsx';
import styles from './Carousel.module.scss';
import images from '@/assets/images';

function Image() {
    return (
        <>
            <div className="row">
                <img className={clsx(styles.image, styles.image1)} src={images.introduce4} alt="4" />
            </div>
            <div className="row">
                <img className={clsx(styles.image, styles.image2)} src={images.introduce5} alt="5" />
            </div>
        </>
    );
}

export default Image;
