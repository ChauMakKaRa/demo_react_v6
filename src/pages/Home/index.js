import clsx from 'clsx';
import styles from './Home.module.scss';
import Carousel from './Carousel';
import Image from './Carousel/image';
import SearchTop from './SearchTop';
function Home() {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.home_page)}>
                <div className={clsx(styles.introduce)}>
                    <div className="row">
                        <span className={clsx(styles.null)}></span>
                    </div>
                    <div className="row">
                        <div className="col-sm-8">
                            <Carousel />
                        </div>
                        <div className="col-sm-4">
                            <Image />
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.null_color_grey)}></div>
                <div className={clsx(styles.product)}>
                    <div className={clsx(styles.top_search)}>
                        <SearchTop />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
