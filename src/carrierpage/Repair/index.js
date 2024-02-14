import clsx from 'clsx';
import styles from './Repair.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/config-api';
function RepairPage() {
    const [repairs, setRepairs] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const respones = await axios.get(`${api.repair_shipper}`);
                const data = respones.data;
                setRepairs(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    const handleCompleteRepair = async (id) => {
        try {
            const confirm = window.confirm(
                'Sau khi xác nhận đã xong thì đơn sửa có thể bị mất bạn có chắc muốn tiếp tục hay không?',
            );
            if (confirm) {
                const respones = await axios.delete(`${api.repair_shipper}?id=${id}`);
                const data = respones.data;
                alert(data.message);
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.repair_page)}>
                <div className={clsx(styles.no_content)}></div>
                <div className={clsx(styles.head_repair)}>
                    <div className={clsx(styles.content_repair)}>Sửa chữa và bảo hành</div>
                </div>
                <div className={clsx(styles.no_content)}></div>

                <div className={clsx(styles.main_repair)}>
                    <div className={clsx(styles.table)}>
                        <div className={clsx(styles.head_table)}>
                            <div className="row">
                                <div className="col-sm-2">ID đơn sửa chữa</div>
                                <div className="col-sm-2">Tên chủ nhà</div>
                                <div className="col-sm-2">Số điện thoại</div>
                                <div className="col-sm-3">Địa chỉ</div>
                                <div className="col-sm-2">Nội dung sửa chữa</div>
                                <div className="col-sm-1">Trạng thái</div>
                            </div>
                        </div>
                        <div className={clsx(styles.main_table)}>
                            {repairs.length === 0 ? (
                                <div style={{ color: 'red', marginLeft: '36%', padding: '10px' }}>
                                    Không có đơn hàng sửa chữa nào trong ngày hôm nay!
                                </div>
                            ) : (
                                <>
                                    {repairs.map((repair, index) => (
                                        <div key={index} className={clsx(styles.body_table)}>
                                            <div className="row">
                                                <div className="col-sm-2">{repair._id}</div>
                                                <div className="col-sm-2">{repair.name}</div>
                                                <div className="col-sm-2">{repair.phone}</div>
                                                <div className="col-sm-3">{repair.address}</div>
                                                <div className="col-sm-2">{repair.content_repair}</div>
                                                <div className="col-sm-1">
                                                    <button
                                                        onClick={() => handleCompleteRepair(repair._id)}
                                                        className={clsx(styles.btn_delete)}
                                                    >
                                                        Đã xong
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

export default RepairPage;
