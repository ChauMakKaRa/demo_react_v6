import clsx from 'clsx';
import styles from './Shippement.module.scss';

function Shippement() {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.page_shippement)}>
                <div className={clsx(styles.head_page)}>
                    <div className={clsx(styles.head_content)}>Vận chuyển và sửa chữa</div>
                </div>
                <div className={clsx(styles.main_page)}>
                    <div className={clsx(styles.table)}>
                        <div className={clsx(styles.head_table)}>
                            <div className="row">
                                <div className="col-sm-1">ID</div>
                                <div className="col-sm-2">Tên chủ hàng</div>
                                <div className="col-sm-2">Số điện thoại</div>
                                <div className="col-sm-2">Địa chỉ</div>
                                <div className="col-sm-2">Ngày đăng ký</div>
                                <div className="col-sm-2">Trạng thái</div>
                                <div className="col-sm-1">Xóa</div>
                            </div>
                        </div>
                        <div className={clsx(styles.body_table)}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shippement;
