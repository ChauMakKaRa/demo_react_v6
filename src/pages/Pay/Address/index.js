import clsx from 'clsx';
import styles from './Address.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/Button';
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/config-api';
function Address() {
    const [show, setShow] = useState(false);
    const [showAddAddress, setShowAddAddress] = useState(false);
    const [addresses, setAddresses] = useState([]);

    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [number_house, setNumberHhouse] = useState('');
    const [street, setStreet] = useState('');
    const [village, setVillage] = useState('');
    const [district, setDistrict] = useState('');
    const [province, setProvince] = useState('');

    const [checked, setChecked] = useState();
    const handleAddAddress = async () => {
        const userId = sessionStorage.getItem('_id');
        try {
            const responese = await axios.put(`${api.user}?userId=${userId}`, {
                phone: phone,
                name: name,
                number_house: number_house,
                street: street,
                village: village,
                district: district,
                province: province,
            });
            alert(responese.data.notitication);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        const userId = sessionStorage.getItem('_id');
        const fetchData = async () => {
            try {
                const responese = await axios.get(`${api.user}?userId=${userId}`);
                const data = responese.data.addresses;
                setAddresses(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const handleUpdateAddress = async (id) => {
        try {
            const responese = await axios.patch(`${api.user}?address_id=${id}`);
            alert(responese.data.notitication);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={clsx(styles.address)}>
            <div className={clsx(styles.image_top)}></div>
            <div className={clsx(styles.iconLocationDot)}>
                <h2>
                    <FontAwesomeIcon icon={faLocationDot} /> Địa Chỉ Nhận Hàng
                </h2>
            </div>
            <div className="row" id={clsx(styles.nameAndAddress)}>
                {show ? (
                    <>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-2"></div>
                        <div className="col-sm-7"></div>
                    </>
                ) : (
                    <>
                        {addresses.map((address, index) => (
                            <Fragment key={index}>
                                {' '}
                                {address.choose === true ? (
                                    <>
                                        <div className="col-sm-1"></div>
                                        <div className="col-sm-2">
                                            <div>{address.name} (+84)</div>
                                            <div>{address.phone}</div>
                                        </div>
                                        <div className="col-sm-7">
                                            Số nhà: {address.number_house}, Đường: {address.street}, Xã/Phường{' '}
                                            {address.village}, Quận/Huyện: {address.district}, Tỉnh/Tp:{' '}
                                            {address.province}
                                        </div>
                                    </>
                                ) : (
                                    ''
                                )}{' '}
                            </Fragment>
                        ))}
                    </>
                )}
                <div className="col-sm-2">
                    <Button className={clsx(styles.btn_change_address, styles.btn)} onClick={() => setShow(!show)}>
                        THAY ĐỔI
                    </Button>
                </div>
                <div className="row">
                    {show && (
                        <>
                            {addresses.map((address, index) => (
                                <div key={index} className="row">
                                    <div className="col-sm-1">
                                        <input
                                            type="radio"
                                            checked={address.choose}
                                            name="option"
                                            onChange={(e) => setChecked(checked)}
                                        />
                                    </div>
                                    <div className="col-sm-2">
                                        <div>{address.name} (+84)</div>
                                        <div>{address.phone}</div>
                                    </div>
                                    <div className="col-sm-7">
                                        Số nhà: {address.number_house}, Đường: {address.street}, Xã/Phường{' '}
                                        {address.village}, Quận/Huyện: {address.district}, Tỉnh/Tp: {address.province}
                                    </div>
                                    <div className="col-sm-2">
                                        <Button
                                            className={clsx(styles.btn, styles.btn_choose_address)}
                                            onClick={() => handleUpdateAddress(address._id)}
                                        >
                                            Sử dụng
                                        </Button>
                                    </div>
                                </div>
                            ))}
                            <div className={clsx(styles.scanner_address)}>
                                {showAddAddress && (
                                    <>
                                        <div style={{ marginTop: '30px' }} className="row">
                                            <div className="col-sm-3">Số điện thoại: </div>
                                            <div className="col-sm-4">
                                                <input
                                                    type="text"
                                                    value={phone}
                                                    className={clsx(styles.input_add_address)}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    placeholder="Vui lòng nhập số điện thoại..."
                                                />
                                            </div>
                                            <div className="col-sm-5"></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-3">Tên người nhận: </div>
                                            <div className="col-sm-4">
                                                <input
                                                    type="text"
                                                    value={name}
                                                    className={clsx(styles.input_add_address)}
                                                    onChange={(e) => setName(e.target.value)}
                                                    placeholder="Vui lòng nhập tên người nhận..."
                                                />
                                            </div>
                                            <div className="col-sm-5"></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-3">Số nhà người nhận: </div>
                                            <div className="col-sm-4">
                                                <input
                                                    type="text"
                                                    value={number_house}
                                                    className={clsx(styles.input_add_address)}
                                                    onChange={(e) => setNumberHhouse(e.target.value)}
                                                    placeholder="Vui lòng nhập số nhà(nếu có)..."
                                                />
                                            </div>
                                            <div className="col-sm-5"></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-3">Đường(không bắt buộc): </div>
                                            <div className="col-sm-4">
                                                <input
                                                    className={clsx(styles.input_add_address)}
                                                    type="text"
                                                    value={street}
                                                    onChange={(e) => setStreet(e.target.value)}
                                                    placeholder="Vui lòng nhập tên đường..."
                                                />
                                            </div>
                                            <div className="col-sm-5"></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-3">Xã/Phường(không bắt buộc): </div>
                                            <div className="col-sm-4">
                                                <input
                                                    className={clsx(styles.input_add_address)}
                                                    type="text"
                                                    value={village}
                                                    onChange={(e) => setVillage(e.target.value)}
                                                    placeholder="Vui lòng nhập tên làng(nếu có)..."
                                                />
                                            </div>
                                            <div className="col-sm-5"></div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-3">Quận/Huyện: </div>
                                            <div className="col-sm-4">
                                                <input
                                                    className={clsx(styles.input_add_address)}
                                                    type="text"
                                                    value={district}
                                                    onChange={(e) => setDistrict(e.target.value)}
                                                    placeholder="Vui lòng nhập tên huyện..."
                                                />
                                            </div>
                                            <div className="col-sm-5"></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-3">Tỉnh/Tp: </div>
                                            <div className="col-sm-4">
                                                <input
                                                    className={clsx(styles.input_add_address)}
                                                    type="text"
                                                    value={province}
                                                    onChange={(e) => setProvince(e.target.value)}
                                                    placeholder="Vui lòng nhập tỉnh..."
                                                />
                                            </div>
                                            <div className="col-sm-5"></div>
                                        </div>
                                        <Button className={clsx(styles.btn, styles.btn_add)} onClick={handleAddAddress}>
                                            Thêm
                                        </Button>
                                    </>
                                )}
                            </div>
                            <div>
                                <Button
                                    className={clsx(styles.btn_add_address, styles.btn)}
                                    onClick={() => setShowAddAddress(!showAddAddress)}
                                >
                                    + Thêm địa chỉ mới
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Address;
