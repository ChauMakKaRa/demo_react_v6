import clsx from 'clsx';
import styles from './Header.module.scss';
import Button from '@/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faBell,
    faBookmark,
    faCalendar,
    faChartLine,
    faChartPie,
    faCheckCircle,
    faEnvelope,
    faFileExport,
    faMessage,
    faScaleBalanced,
    faSearch,
    faShoppingCart,
    faTools,
    faUserCircle,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
function LayoutHeaderAdmin() {
    // className={clsx(styles.)}
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.sidebar)}>
                <div className={clsx(styles.sidebar_brand)}>
                    <div className={clsx(styles.brand_flex)}>
                        <img
                            src="https://inkythuatso.com/uploads/thumbnails/800/2023/03/9-anh-dai-dien-trang-inkythuatso-03-15-27-03.jpg"
                            width={30}
                            alt="avatar"
                        />

                        <div className={clsx(styles.brand_icons)}>
                            <FontAwesomeIcon icon={faBell} />
                            <FontAwesomeIcon icon={faUserCircle} />
                        </div>
                    </div>
                </div>

                <div className={clsx(styles.sidebar_main)}>
                    <div className={clsx(styles.sidebar_user)}>
                        <img
                            src="https://inkythuatso.com/uploads/thumbnails/800/2023/03/9-anh-dai-dien-trang-inkythuatso-03-15-27-03.jpg"
                            className={clsx(styles.image)}
                            alt="avatar user"
                        />
                        <div>
                            <h3 className={clsx(styles.name)}>Tên</h3>
                            <span className={clsx(styles.email)}> gmail.com</span>
                        </div>
                    </div>

                    <div className={clsx(styles.sidebar_menu)}>
                        <div className={clsx(styles.menu_head)}>
                            <span>bảng điều khiển</span>
                        </div>
                        <ul>
                            <li>
                                <Button href={''} className={clsx(styles.scaleBalanced, styles.li_a)}>
                                    <FontAwesomeIcon className={clsx(styles.icons)} icon={faScaleBalanced} />
                                    Tài chính
                                </Button>
                            </li>
                            <li>
                                <Button href={''} className={clsx(styles.ChartPie, styles.li_a)}>
                                    <FontAwesomeIcon className={clsx(styles.icons)} icon={faChartPie} />
                                    Phân tích
                                </Button>
                            </li>
                        </ul>
                        {/* {} */}
                        <div className={clsx(styles.menu_head)}>
                            <span>Applucations</span>
                        </div>
                        <ul>
                            <li>
                                <Button href={''} className={clsx(styles.faCalendar, styles.li_a)}>
                                    <FontAwesomeIcon className={clsx(styles.icons)} icon={faCalendar} />
                                    Lịch
                                </Button>
                            </li>
                            <li>
                                <Button href={''} className={clsx(styles.faUsers, styles.li_a)}>
                                    <FontAwesomeIcon className={clsx(styles.icons)} icon={faUsers} />
                                    Liên hệ
                                </Button>
                            </li>
                            <li>
                                <Button href={''} className={clsx(styles.faShoppingCart, styles.li_a)}>
                                    <FontAwesomeIcon className={clsx(styles.icons)} icon={faShoppingCart} />
                                    Ecommerce
                                </Button>
                            </li>
                            <li>
                                <Button href={''} className={clsx(styles.faEnvelope, styles.li_a)}>
                                    <FontAwesomeIcon className={clsx(styles.icons)} icon={faEnvelope} />
                                    Mail box
                                </Button>
                            </li>
                            <li>
                                <Button href={''} className={clsx(styles.faCheckCircle, styles.li_a)}>
                                    <FontAwesomeIcon className={clsx(styles.icons)} icon={faCheckCircle} />
                                    <span className="las la-check-circle"></span>
                                    Tasks
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.main_content)}>
                <header>
                    <div className={clsx(styles.menu_toggle)}>
                        <label for="">
                            <FontAwesomeIcon icon={faBars} />
                        </label>{' '}
                    </div>
                    <div className={clsx(styles.header_icons)}>
                        <FontAwesomeIcon className={clsx(styles.header_icon)} icon={faSearch} />
                        <FontAwesomeIcon className={clsx(styles.header_icon)} icon={faBookmark} />
                        <FontAwesomeIcon className={clsx(styles.header_icon)} icon={faMessage} />
                    </div>
                </header>
                <main>
                    <div className={clsx(styles.page_header)}>
                        <div>
                            <h1>Analytics Dashbord</h1>
                            <small>Monitor key metrics. check respornt and review insights</small>
                        </div>
                        <div className={clsx(styles.header_actions)}>
                            <Button className={clsx(styles.btn_header_action)}>
                                <FontAwesomeIcon className={clsx(styles.header_icon2)} icon={faFileExport} />
                                Export
                            </Button>
                            <Button className={clsx(styles.btn_header_action)}>
                                <FontAwesomeIcon className={clsx(styles.header_icon2)} icon={faTools} />
                                Settings
                            </Button>
                        </div>
                    </div>
                    <div className={clsx(styles.cards)}>
                        <div className={clsx(styles.card_single)}>
                            <div className={clsx(styles.card_flex)}>
                                <div className={clsx(styles.card_info)}>
                                    <div className={clsx(styles.card_head)}>
                                        <span>Ourchases</span>
                                        <small>Number of Ourchases</small>
                                    </div>
                                    <h2>17.663</h2>
                                    <small>2% less Ourchases</small>
                                </div>
                                <div className={clsx(styles.card_chart)}>
                                    <FontAwesomeIcon
                                        className={clsx(styles.sucess, styles.chart_icon)}
                                        icon={faChartLine}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* {} */}
                        <div className={clsx(styles.card_single)}>
                            <div className={clsx(styles.card_flex)}>
                                <div className={clsx(styles.card_info)}>
                                    <div className={clsx(styles.card_head)}>
                                        <span>Refunds</span>
                                        <small>Number of Refunds</small>
                                    </div>
                                    <h2>$17.663</h2>
                                    <small>2% less Refunds</small>
                                </div>
                                <div className={clsx(styles.card_chart)}>
                                    <FontAwesomeIcon
                                        className={clsx(styles.danger, styles.chart_icon)}
                                        icon={faChartLine}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* {} */}
                        <div className={clsx(styles.card_single)}>
                            <div className={clsx(styles.card_flex)}>
                                <div className={clsx(styles.card_info)}>
                                    <div className={clsx(styles.card_head)}>
                                        <span>Unique Visitors</span>
                                        <small>Number of Visitors</small>
                                    </div>
                                    <h2>17.663</h2>
                                    <small>2% less Visitors</small>
                                </div>
                                <div className={clsx(styles.card_chart)}>
                                    <FontAwesomeIcon
                                        className={clsx(styles.orangered, styles.chart_icon)}
                                        icon={faChartLine}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default LayoutHeaderAdmin;
// 25.15s
