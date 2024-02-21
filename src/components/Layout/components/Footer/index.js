import clsx from 'clsx';
import styles from './Footer.module.scss';
import Button from '@/components/Button';
function Footer() {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.footer)}>
                <footer className="site-footer">
                    <div className="container">
                        <div className="row">
                            <div className={clsx(styles.white, 'col-md-4')}>
                                <h3>Thông tin</h3>
                                <p className={clsx(styles.white)}>
                                    Cửa hàng bán thiết bị điện gia dụng thường cung cấp một loạithiết bị gia đình và
                                    công nghiệp nhằm phục vụ nhu cầu sử dụng điện trong gia đình và cũng như nơi làm
                                    việc. v.v.
                                </p>
                            </div>
                            <div className={clsx(styles.white, 'col-md-4')}>
                                <h3>Hỗ trợ</h3>
                                <ul>
                                    <li>
                                        <Button to={'/'}>Bảo hành và sửa chữa</Button>
                                    </li>
                                    <li>
                                        <Button href="#">Liên hệ khiêu nại</Button>
                                    </li>
                                    <li>
                                        <Button href="#">Gọi mua</Button>
                                    </li>
                                    {/* Thêm các liên kết đến các danh mục sản phẩm khác */}
                                </ul>
                            </div>
                            <div className={clsx(styles.white, 'col-md-4')}>
                                <h3>Liên hệ</h3>
                                <p>
                                    Email: rak949427@gmail.com
                                    <br />
                                    Điện thoại: 0123-456-789
                                    <br />
                                    Địa chỉ: nhà số 285, đường 3/2, phường Xuân Khánh, quận Ninh Kiều, tp Cần Thơ,
                                </p>
                            </div>
                        </div>
                        <hr className={clsx(styles.white)} />
                        <p className={clsx(styles.white, 'text-center')}>© 2024 Thiết bị điện gia dụng gia đình</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Footer;
