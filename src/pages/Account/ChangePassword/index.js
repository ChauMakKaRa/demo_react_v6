import clsx from 'clsx';
import styles from './ChangePassword.module.scss';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import api from '@/config-api';

function ChangePassword() {
    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const handleConfirmChangePass = () => {
        const fetchData = async () => {
            const user_id = sessionStorage.getItem('_id');
            try {
                const response = await axios.patch(`${api.changepass}?userId=${user_id}`, {
                    oldPass: oldPass,
                    newPass: newPass,
                    confirmPass: confirmPass,
                });
                const data = response.data;
                alert(data.notification);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    };
    return (
        <div className={clsx(styles.change_password_page)}>
            <div className={clsx(styles.content_change_password)}>
                <h2>
                    <b>Đổi Mật Khẩu</b>
                </h2>
            </div>
            <div className={clsx(styles.form)}>
                <div className={clsx(styles.old_pass)}>
                    <div className="row">
                        <div className="col-sm-3" style={{ marginLeft: '30px', marginTop: '10px' }}>
                            <label>Nhập Mật Khẩu Cũ:</label>
                        </div>
                        <div className="col-sm-5">
                            <input
                                className={clsx(styles.input_css)}
                                type="password"
                                placeholder="Vui lòng nhập mật khẩu cũ..."
                                required
                                value={oldPass}
                                onChange={(e) => setOldPass(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.new_pass)}>
                    <div className="row">
                        <div className="col-sm-3" style={{ marginLeft: '30px', marginTop: '10px' }}>
                            <label>Nhập Mật Khẩu Mới: </label>
                        </div>
                        <div className="col-sm-5">
                            <input
                                className={clsx(styles.input_css)}
                                type="password"
                                placeholder="Vui lòng nhập mật khẩu mới..."
                                required
                                value={newPass}
                                onChange={(e) => setNewPass(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.cofirm_pass)}>
                    <div className="row">
                        <div className="col-sm-3" style={{ marginLeft: '30px', marginTop: '10px' }}>
                            <label>Xác Nhận Lại Mật Khẩu:</label>
                        </div>
                        <div className="col-sm-5">
                            <input
                                className={clsx(styles.input_css)}
                                type="password"
                                placeholder="Vui lòng nhập mật khẩu mới..."
                                required
                                value={confirmPass}
                                onChange={(e) => setConfirmPass(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3" style={{ marginLeft: '30px', marginTop: '10px' }}></div>
                <div className="col-sm-5">
                    <Button onClick={handleConfirmChangePass} className={clsx(styles.confirm)}>
                        Xác Nhận
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;
