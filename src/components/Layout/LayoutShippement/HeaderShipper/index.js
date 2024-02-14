import clsx from 'clsx';
import styles from './HeaderShipper.module.scss';
import images from '@/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Button from '@/components/Button';
import { useNavigate } from 'react-router-dom';

function HeaderShipper() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const handleOpenDroDown = () => {
        setIsOpen(!isOpen);
    };
    const handleLogOut = () => {
        sessionStorage.removeItem('id');
        sessionStorage.removeItem('roles');
        sessionStorage.removeItem('_id');
        navigate('/login');
        setIsOpen(!isOpen);
    };
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.logo)}>
                <img src={images.logo} alt="logo" />
            </div>
            <div className={clsx(styles.flex)}></div>
            <div className={clsx(styles.search)}>
                <input type="text" placeholder="Nhập ID đơn hàng..." />
                <FontAwesomeIcon className={clsx(styles.icon_search)} icon={faSearch} />
            </div>
            <div className={clsx(styles.flex)}></div>

            <div className={clsx(styles.list_words)}>
                <div className={clsx(styles.installation)}>
                    <Button to={'/carreir/shipper'} className={clsx(styles.btn_a)}>
                        <b className={clsx(styles.btn_a)}> Lắp đặt</b>
                    </Button>
                </div>
                <div className={clsx(styles.repair)}>
                    <Button to={'/carreir/repair'}>
                        <b className={clsx(styles.btn_a)}>Sửa chữa</b>
                    </Button>
                </div>
            </div>
            <div className={clsx(styles.flex)}></div>

            <div className={clsx(styles.account)}>
                <>
                    <div className={clsx(styles.avatar)} onClick={handleOpenDroDown}>
                        <img
                            className={clsx(styles.image_avatar)}
                            src="https://png.pngtree.com/png-vector/20200417/ourmid/pngtree-delivery-boy-with-mask-riding-bike-vector-png-image_2187935.jpg"
                            alt="avatar"
                        />
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
        </div>
    );
}

export default HeaderShipper;
