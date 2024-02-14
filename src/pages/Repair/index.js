import clsx from 'clsx';
import styles from './Repair.module.scss';
import Button from '@/components/Button';
import { useState } from 'react';
import axios from 'axios';
import api from '@/config-api';

function Repair() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [content, setContent] = useState('');

    const handleSubmitForm = async () => {
        try {
            const respones = await axios.post(`${api.repair}`, {
                name: name,
                phone: phone,
                address: address,
                content: content,
                user_id: sessionStorage.getItem('_id'),
            });
            const data = respones.data;
            alert(data.message);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.repair_page_customers)}>
                <div className={clsx(styles.main)}>
                    <div className="row">
                        <div className="col-sm-7">
                            <img
                                className={clsx(styles.image_repair)}
                                src="https://congnghetantien.vn/upload/sanpham/suachuamaylanhtphcm46908130.jpg"
                                width={500}
                                alt="repair"
                            />
                        </div>
                        <div className="col-sm-5">
                            <form onSubmit={handleSubmitForm} className={clsx(styles.form_repair)}>
                                <div className={clsx(styles.text_content)}>
                                    <p style={{ color: 'red' }}>Đăng ký sửa chữa hoặc đăng ký bảo hành tại đây</p>
                                </div>
                                <div className={clsx(styles.name)}>
                                    <label>Tên người đăng ký:</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Nhập tên..."
                                        required
                                    />
                                </div>
                                <div className={clsx(styles.phone)}>
                                    <label>Số điện thoại:</label>
                                    <input
                                        type="text"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="Nhập số điện thoại..."
                                        required
                                    />
                                </div>
                                <div className={clsx(styles.address)}>
                                    <label>Địa chỉ nhà:</label>
                                    <input
                                        type="text"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        placeholder="Nhập địa chỉ..."
                                        required
                                    />
                                </div>
                                <div className={clsx(styles.content_repair)}>
                                    <label>Nội dung:</label>
                                    <textarea
                                        rows="4"
                                        cols="50"
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                        required
                                        placeholder="Ví dụ: Sửa máy lạnh... Bảo hành: Tivi..."
                                    >
                                        Nhập nội dung ở đây...
                                    </textarea>
                                </div>
                                <div className={clsx(styles.submit)}>
                                    <Button className={clsx(styles.btn_submit)} type="submit">
                                        Gửi
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Repair;
