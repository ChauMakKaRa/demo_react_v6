import clsx from 'clsx';
import styles from './Shippement.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/config-api';

function Shippement() {
    const [repairs, setRepairs] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const respones = await axios.get(`${api.repair_admin}`);
                const data = respones.data;
                setRepairs(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    const handleCofirmRepair = async (id) => {
        try {
            const respones = await axios.patch(`${api.repair_admin}?id=${id}`);
            const data = respones.data;
            alert(data.message);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.page_shippement)}>
                <div className={clsx(styles.head_page)}>
                    <div className={clsx(styles.head_content)}>VẬN CHUYỂN VÀ SỬA CHỮA</div>
                </div>
                <div className={clsx(styles.main_page)}>
                    <div className={clsx(styles.table)}>
                        <div className={clsx(styles.head_table)}>
                            <div className="row">
                                <div className="col-sm-2">Họ và tên</div>
                                <div className="col-sm-2">Ngày đăng ký</div>
                                <div className="col-sm-2">Số điện thoại</div>
                                <div className="col-sm-3">Địa chỉ</div>
                                <div className="col-sm-2">Nội dung</div>
                                <div className="col-sm-1"></div>
                            </div>
                        </div>
                        <div className={clsx(styles.body_table)}>
                            {repairs.length === 0 ? (
                                <div style={{ color: 'red', textAlign: 'center' }}>
                                    Không có đơn sửa chữa nào trong hôm nay.
                                </div>
                            ) : (
                                <>
                                    {repairs.map((repair, index) => (
                                        <div key={index} className={clsx(styles.row_table)}>
                                            <div className="row">
                                                <div className="col-sm-2">{repair.name}</div>
                                                <div className="col-sm-2">{repair.createdAt}</div>
                                                <div className="col-sm-2">{repair.phone}</div>
                                                <div className="col-sm-3">{repair.address}</div>
                                                <div className="col-sm-2">{repair.content_repair}</div>
                                                <div className="col-sm-1">
                                                    <button
                                                        onClick={() => handleCofirmRepair(repair._id)}
                                                        className={clsx(styles.btn_cofirm)}
                                                    >
                                                        {repair.status}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shippement;
