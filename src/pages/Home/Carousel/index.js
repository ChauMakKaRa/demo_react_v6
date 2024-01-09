// import clsx from 'clsx';
// import styles from './Carousel.module.scss';
import images from '@/assets/images';
function Carousel() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={images.introduce1} className=" image-carousel " height={230} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={images.introduce2} className=" image-carousel " height={230} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={images.introduce3} className=" image-carousel" height={230} alt="..." />
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
        </div>
    );
}

export default Carousel;
