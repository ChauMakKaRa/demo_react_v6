import clsx from 'clsx';
import styles from './Main.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCircleDollarToSlot, faScrewdriverWrench, faUsers } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/Button';
import { useState } from 'react';

function Main() {
    const [selectedTab, setSelectedTab] = useState(null);
    return (
        <>
            <div className={clsx(styles.cards)}>
                <Button
                    to={'/admin'}
                    className={clsx(styles.card_single)}
                    onClick={() => setSelectedTab('admin')}
                    style={{
                        background: selectedTab === 'admin' ? '#fe2c55' : 'white',
                        color: selectedTab === 'admin' ? 'white' : '#fe2c55',
                    }}
                >
                    <div>
                        <div className={clsx(styles.card_flex)}>
                            <div className={clsx(styles.card_info)}>
                                <div className={clsx(styles.card_head)}>
                                    <span>Khách hàng</span>
                                    <small>Số lượng khách hàng </small>
                                </div>
                                <h2>54</h2>
                                <small>Customer</small>
                            </div>
                            <div className={clsx(styles.card_chart)}>
                                <FontAwesomeIcon className={clsx(styles.chart_icon)} icon={faUsers} />
                            </div>
                        </div>
                    </div>
                </Button>

                {/* {} */}
                <Button
                    to={'/order'}
                    onClick={() => setSelectedTab('order')}
                    style={{
                        background: selectedTab === 'order' ? '#fe2c55' : 'white',
                        color: selectedTab === 'order' ? 'white' : '#fe2c55',
                    }}
                >
                    <div className={clsx(styles.card_single)}>
                        <div className={clsx(styles.card_flex)}>
                            <div className={clsx(styles.card_info)}>
                                <div className={clsx(styles.card_head)}>
                                    <span>Đơn hàng</span>
                                    <small>Số lượng đơn hàng</small>
                                </div>
                                <h2>124</h2>
                                <small>Order</small>
                            </div>
                            <div className={clsx(styles.card_chart)}>
                                <FontAwesomeIcon
                                    className={clsx(styles.primary, styles.chart_icon)}
                                    icon={faBagShopping}
                                />
                            </div>
                        </div>
                    </div>
                </Button>
                {/* {} */}
                <Button
                    to={'/project'}
                    onClick={() => setSelectedTab('project')}
                    style={{
                        background: selectedTab === 'project' ? '#fe2c55' : 'white',
                        color: selectedTab === 'project' ? 'white' : '#fe2c55',
                    }}
                >
                    <div className={clsx(styles.card_single)}>
                        <div className={clsx(styles.card_flex)}>
                            <div className={clsx(styles.card_info)}>
                                <div className={clsx(styles.card_head)}>
                                    <span>Bảo hành</span>
                                    <small>Bảo hành và sửa chữa</small>
                                </div>
                                <h2>79</h2>
                                <small>Repair</small>
                            </div>
                            <div className={clsx(styles.card_chart)}>
                                <FontAwesomeIcon
                                    className={clsx(styles.primary, styles.chart_icon)}
                                    icon={faScrewdriverWrench}
                                />
                            </div>
                        </div>
                    </div>
                </Button>
                {/* {} */}
                <Button
                    to={'/incone'}
                    onClick={() => setSelectedTab('incone')}
                    style={{
                        background: selectedTab === 'incone' ? '#fe2c55' : 'white',
                        color: selectedTab === 'incone' ? 'white' : '#fe2c55',
                    }}
                >
                    <div className={clsx(styles.card_single)}>
                        <div className={clsx(styles.card_flex)}>
                            <div className={clsx(styles.card_info)}>
                                <div className={clsx(styles.card_head)}>
                                    <span>Doanh thu</span>
                                    <small>Danh thu trong 1 ngày </small>
                                </div>
                                <h2>$6k</h2>
                                <small>Incone</small>
                            </div>
                            <div className={clsx(styles.card_chart)}>
                                <FontAwesomeIcon
                                    className={clsx(styles.primary, styles.chart_icon)}
                                    icon={faCircleDollarToSlot}
                                />
                            </div>
                        </div>
                    </div>
                </Button>
            </div>
        </>
    );
}

export default Main;
