import clsx from 'clsx';
import styles from './HeaderShipper.module.scss';
import images from '@/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Button from '@/components/Button';

function HeaderShipper() {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenDroDown = () => {
        setIsOpen(!isOpen);
    };
    const handleLogOut = () => {};
    return (
        <>
            <div className={clsx(styles.logo)}>
                <img src={images.logo} alt="logo" />
            </div>
            <div className={clsx(styles.search)}>
                <input type="text" placeholder="Nhập ID đơn hàng..." />
                <FontAwesomeIcon icon={faSearch} />
            </div>
            <div className={clsx(styles.list_words)}>
                <div className={clsx(styles.installation)}>Lắp đặt</div>
                <div className={clsx(styles.repair)}>Sửa chữ</div>
            </div>
            <div className={clsx(styles.account)}>
                <>
                    <div className={clsx(styles.avatar)} onClick={handleOpenDroDown}>
                        <img src="##" alt="avatar" />
                        <>Tên</>
                    </div>
                    {isOpen ? (
                        <div className={clsx(styles.drodown)}>
                            <div className={clsx(styles.logout)}>
                                <Button className={clsx(styles.dropdown_menu)} onClick={handleLogOut}>
                                    <span style={{ color: 'black' }}>Đăng xuất</span>

                                    <FontAwesomeIcon
                                        style={{ marginLeft: '10px', color: '#fe2c55' }}
                                        icon={faRightFromBracket}
                                    />
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                </>
            </div>
        </>
    );
}

export default HeaderShipper;
