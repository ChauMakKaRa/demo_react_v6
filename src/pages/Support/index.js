import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Support.module.scss';
import clsx from 'clsx';
import { faAddressCard, faSearch, faTruck, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { faAmazonPay } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
const Support = () => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.support_page)}>
                <div className={clsx(styles.header)}>
                    <div className={clsx(styles.hello)}>Xin chào, Chúng tôi có thể giúp gì cho bạn?</div>
                    <div className={clsx(styles.search)}>
                        <input
                            type="text"
                            className={clsx(styles.input_search)}
                            placeholder="Nhập từ khóa hoặc nôi dung cần tìm kiếm"
                        />
                        <FontAwesomeIcon className={clsx(styles.icon_search)} icon={faSearch} />
                    </div>
                </div>
                <div className={clsx(styles.main)}>
                    <div className={clsx(styles.category)}>
                        <div className={clsx(styles.name)}>Danh mục</div>
                        <div className={clsx(styles.list_category)}>
                            <div className={clsx(styles.shopping)}>
                                <FontAwesomeIcon icon={faWarehouse} className={clsx(styles.icon)} /> Mua Sắm Cùng FAST
                            </div>
                            <div className={clsx(styles.pay)}>
                                <FontAwesomeIcon icon={faAmazonPay} className={clsx(styles.icon)} /> Thanh Toán
                            </div>
                            <div className={clsx(styles.order)}>
                                <FontAwesomeIcon icon={faTruck} className={clsx(styles.icon)} /> Đơn Hàng & Vận Chuyển
                            </div>
                            <div className={clsx(styles.information)}>
                                <FontAwesomeIcon icon={faAddressCard} className={clsx(styles.icon)} /> Thông Tin Chung
                            </div>
                        </div>
                    </div>
                    <div className={clsx(styles.question)}>
                        <div className={clsx(styles.content)}>Câu hỏi thường gặp</div>
                        <div className={clsx(styles.warning, styles.question_content)} onClick={() => setShow1(!show1)}>
                            [Cảnh báo lừa đảo] Mua sắm an toàn cùng FAST
                        </div>
                        {show1 ? (
                            <div className={clsx(styles.answer)}>
                                <i>
                                    {' '}
                                    Câu trả lời: Để mua sắm an toàn, hãy chọn mua từ nguồn cung cấp đáng tin cậy, sử
                                    dụng phương thức thanh toán an toàn và kiểm tra kỹ chính sách hoàn trả và bảo hành
                                    trước khi mua hàng. Hãy cẩn trọng với các ưu đãi quá hấp dẫn và thông tin không xác
                                    thực để tránh lừa đảo.
                                </i>
                            </div>
                        ) : (
                            <div></div>
                        )}
                        <div className={clsx(styles.service, styles.question_content)} onClick={() => setShow2(!show2)}>
                            [Dịch vụ] Làm sao để liên hệ chăm sóc khách hàng [CSKH]
                        </div>
                        {show2 ? (
                            <div className={clsx(styles.answer)}>
                                <i>
                                    {' '}
                                    Câu trả lời: Để liên hệ với bộ phận chăm sóc khách hàng, bạn có thể gọi điện, gửi
                                    email hoặc sử dụng hộp thoại trò chuyện trực tuyến trên trang web của công ty.
                                </i>
                            </div>
                        ) : (
                            <div></div>
                        )}
                        <div className={clsx(styles.ordered, styles.question_content)} onClick={() => setShow3(!show3)}>
                            [Giao hàng] Sản phẩm của bạn có miễn phí giao hàng không?
                        </div>
                        {show3 ? (
                            <div className={clsx(styles.answer)}>
                                <i>
                                    Câu trả lời: Có, chúng tôi cung cấp dịch vụ giao hàng miễn phí cho tất cả các đơn
                                    hàng trên một mức giá nhất định. Chi tiết về chính sách giao hàng miễn phí của chúng
                                    tôi có thể được tìm thấy trong trang thông tin vận chuyển.
                                </i>
                            </div>
                        ) : (
                            <div></div>
                        )}
                        <div className={clsx(styles.ordered, styles.question_content)} onClick={() => setShow4(!show4)}>
                            [Đơn hàng] Làm sao để kiểm tra tình trạng đơn hàng của tôi?
                        </div>
                        {show4 ? (
                            <div className={clsx(styles.answer)}>
                                <i>
                                    {' '}
                                    Câu trả lời: Để kiểm tra tình trạng đơn hàng, bạn có thể đăng nhập vào tài khoản của
                                    mình và xem trạng thái của đơn hàng từ trang quản lý đơn hàng.{' '}
                                </i>
                            </div>
                        ) : (
                            <div></div>
                        )}
                        <div className={clsx(styles.ordered, styles.question_content)} onClick={() => setShow5(!show5)}>
                            [Đồi/Trả sp] Làm thế nào để đổi/trả sản phẩm?
                        </div>
                        {show5 ? (
                            <div className={clsx(styles.answer)}>
                                <i>
                                    {' '}
                                    Câu trả lời: Chúng tôi chấp nhận việc đổi/trả sản phẩm theo chính sách đổi/trả hàng
                                    của chúng tôi. Để biết thông tin chi tiết về cách thức và điều kiện đổi/trả hàng,
                                    bạn có thể xem trang Điều khoản và Điều kiện hoặc liên hệ với chúng tôi để được hỗ
                                    trợ thêm.
                                </i>
                            </div>
                        ) : (
                            <div></div>
                        )}
                        <div className={clsx(styles.ordered, styles.question_content)} onClick={() => setShow6(!show6)}>
                            [Bảo hành] Sản phẩm của bạn có bảo hành không?
                        </div>
                        {show6 ? (
                            <div className={clsx(styles.answer)}>
                                <i>
                                    {' '}
                                    Câu trả lời: Tất cả sản phẩm của chúng tôi đều đi kèm với chính sách bảo hành. Để
                                    biết thông tin chi tiết về thời hạn bảo hành và điều kiện áp dụng, vui lòng kiểm tra
                                    trực tiếp trên trang thông tin sản phẩm hoặc liên hệ với chúng tôi để được tư vấn
                                    thêm.
                                </i>
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
