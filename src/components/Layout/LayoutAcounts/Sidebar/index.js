import { useState } from 'react';
import styles from './Sidebar.module.scss';
import clsx from 'clsx';
import Button from '@/components/Button';

function Sidebar() {
    const [showMyAccount, setShowMyAccount] = useState(false);
    const [selectedTab, setSelectedTab] = useState(null);
    return (
        <>
            <div className={clsx(styles.avatar_name)}>
                <div>
                    <img
                        src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg"
                        className={clsx(styles.image)}
                        width={48.4}
                        alt="avatar"
                    />
                </div>
                <div className={clsx(styles.name)}>Name</div>
            </div>
            <div className={clsx(styles.my_account)}>
                <Button onClick={() => setShowMyAccount(!showMyAccount)}>Tài khoản của tôi</Button>
                <div className={clsx(styles.dropdown_my_account)}>
                    {showMyAccount && (
                        <>
                            <div className={clsx(styles.btn_in_dropdown)}>
                                <Button
                                    to="/my-account"
                                    onClick={() => setSelectedTab('my-account')}
                                    style={{ color: selectedTab === 'my-account' ? 'red' : 'black' }}
                                >
                                    Hồ Sơ
                                </Button>
                            </div>
                            <div className={clsx(styles.btn_in_dropdown)}>
                                <Button
                                    to="/my-account/payment"
                                    onClick={() => setSelectedTab('payment')}
                                    style={{ color: selectedTab === 'payment' ? 'red' : 'black' }}
                                >
                                    Ngân Hàng
                                </Button>
                            </div>
                            <div className={clsx(styles.btn_in_dropdown)}>
                                <Button
                                    to="/my-account/address"
                                    onClick={() => setSelectedTab('address')}
                                    style={{ color: selectedTab === 'address' ? 'red' : 'black' }}
                                >
                                    Địa chỉ
                                </Button>
                            </div>
                            <div className={clsx(styles.btn_in_dropdown)}>
                                <Button
                                    to="/my-account/change-password"
                                    onClick={() => setSelectedTab('change-password')}
                                    style={{ color: selectedTab === 'change-password' ? 'red' : 'black' }}
                                >
                                    Đổi mật khẩu
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className={clsx(styles.order)}>
                <Button
                    to="/my-account/order"
                    onClick={() => setSelectedTab('order')}
                    style={{ color: selectedTab === 'change-password' ? 'red' : 'black' }}
                >
                    {' '}
                    Đơn mua
                </Button>
            </div>
            <div className={clsx(styles.notification)}>
                <Button
                    to="/my-account/notification"
                    onClick={() => setSelectedTab('notification')}
                    style={{ color: selectedTab === 'change-password' ? 'red' : 'black' }}
                >
                    {' '}
                    Thông báo
                </Button>
            </div>
        </>
    );
}

export default Sidebar;
