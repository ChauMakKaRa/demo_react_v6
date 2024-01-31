import clsx from 'clsx';
import styles from './Address.module.scss';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/config-api';

function Address() {
    const [addresses, setAddresses] = useState([]);
    useEffect(() => {
        const user_id = sessionStorage.getItem('_id');
        const fetchData = async () => {
            try {
                const response = await axios.get(`${api.address}?id_user=${user_id}`);
                const data = response.data;
                setAddresses(data.addresses);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    const handleDelete = async (id) => {
        const user_id = sessionStorage.getItem('_id');
        try {
            const confirm = window.confirm('Bạn có chắc chắn muốn xóa địa chỉ này không?');
            if (confirm) {
                await axios.delete(`${api.address}?userId=${user_id}&addressId=${id}`);
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={clsx(styles.address_page)}>
            <div className={clsx(styles.content_address)}>
                <div className="row">
                    <div className="col-sm-9">
                        <p style={{ fontSize: '2.125rem' }}>Địa chỉ của tôi</p>
                    </div>
                    <div className="col-sm-3">
                        <Button className={clsx(styles.btn_add)}>
                            <FontAwesomeIcon icon={faPlus} />
                            Thêm địa chỉ mới
                        </Button>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.list_address)}>
                <div style={{ padding: '20px' }}>
                    <h2>Địa chỉ</h2>
                </div>
                <ul>
                    {addresses.map((address, index) => (
                        <li key={index} style={{ padding: '20px 0', borderBottom: '1px solid #f0f0f0' }}>
                            <div className="row">
                                <div className="col-sm-10">
                                    <div style={{ display: 'flex' }}>
                                        <div> {address.name} </div>{' '}
                                        <div
                                            style={{
                                                height: '30px',
                                                width: '1px',
                                                border: '1px solid #ccc',
                                                margin: '0 10px',
                                            }}
                                        ></div>{' '}
                                        <div>{address.phone}</div>
                                    </div>
                                    <div>
                                        Số nhà: {address.number_house}, Đường: {address.street}, Xã/Phường{' '}
                                        {address.village}, Quận/Huyện: {address.district}, Tỉnh/Tp: {address.province}
                                    </div>
                                    <div>{address.choose && <>Mặc định</>}</div>
                                </div>
                                <div className="col-sm-2">
                                    <Button
                                        className={clsx(styles.btn_delete)}
                                        onClick={() => handleDelete(address._id)}
                                    >
                                        Xóa
                                    </Button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Address;
