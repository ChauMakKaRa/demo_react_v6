import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ManangerAccount.module.scss';

import clsx from 'clsx';
import { faCircleMinus, faCircleXmark, faPen, faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/config-api';
import Form from './Form';
import FormRepair from './FormRepair';

function ManangerAccount() {
    const [users, setUsers] = useState([]);
    const [showFormAddUser, setShowFormAddUser] = useState(false);
    const [showFormRepairUser, setShowFormRepairUser] = useState(false);
    const [userRepair, setUserRepair] = useState();
    const [checked, setChecked] = useState([]);

    useEffect(() => {
        const admin_id = sessionStorage.getItem('_id');
        const fetchData = async () => {
            try {
                const respones = await axios.get(`${api.userexceptadmin}?adminId=${admin_id}`);
                const data = respones.data;
                setUsers(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const handleClickRepairIdUser = (user) => {
        setShowFormRepairUser(!showFormRepairUser);
        setUserRepair(user);
    };

    const handleDeleteUser = async (id, name) => {
        try {
            const confirm = window.confirm(`Bạn có chắc chắn muốn xóa người dùng ${name} không?`);
            if (confirm) {
                const respones = await axios.delete(`${api.admin}?id=${id}`);
                const data = respones.data;
                alert(data.message);
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteAllChecked = async () => {
        try {
            const respones = await axios.delete(`${api.delete_all_checked}?checked=${checked}`);
            const data = respones.data;
            alert(data.message);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    const handleCheck = (id) => {
        setChecked((prev) => {
            const isChecked = checked.includes(id);
            if (isChecked) {
                return checked.filter((item) => item !== id);
            } else {
                return [...prev, id];
            }
        });
    };
    return (
        <div className={clsx(styles.wrapper)}>
            {showFormRepairUser && (
                <div>
                    <div className={clsx(styles.form_overlay2)} />
                    <div className={clsx(styles.form_container2)}>
                        <FontAwesomeIcon
                            className={clsx(styles.delete_form)}
                            icon={faCircleXmark}
                            onClick={() => setShowFormRepairUser(!showFormRepairUser)}
                        />
                        <div className={clsx(styles.content_add)}>Sửa thông tin người dùng</div>
                        <FormRepair user={userRepair} />
                    </div>
                </div>
            )}
            <div className={clsx(styles.mananger_account_page)}>
                <div className={clsx(styles.head_manager)}>
                    <div className={clsx(styles.content_manager)}>Quản Lý Tài Khoản</div>
                    <div className={clsx(styles.no_content)}></div>
                    <div className={clsx(styles.delete_account)} onClick={handleDeleteAllChecked}>
                        <FontAwesomeIcon icon={faCircleMinus} style={{ margin: '0 5px' }} />
                        <small>Xóa</small>
                    </div>
                    <div className={clsx(styles.add_account)} onClick={() => setShowFormAddUser(!showFormAddUser)}>
                        <FontAwesomeIcon icon={faPlusCircle} style={{ margin: '0 5px' }} />
                        <small>Thêm Mới</small>
                    </div>
                </div>
                {showFormAddUser && (
                    <div>
                        <div className={clsx(styles.form_overlay)} />
                        <div className={clsx(styles.form_container)}>
                            <FontAwesomeIcon
                                className={clsx(styles.delete_form)}
                                icon={faCircleXmark}
                                onClick={() => setShowFormAddUser(!showFormAddUser)}
                            />
                            <div className={clsx(styles.content_add)}>Thêm người dùng mới</div>
                            <Form />
                        </div>
                    </div>
                )}

                <div className={clsx(styles.body_manager)}>
                    <div className={clsx(styles.head_table)}>
                        <div className="row">
                            <div className="col-sm-1">
                                <input type="checkbox" />
                            </div>
                            <div className="col-sm-2">Tên</div>
                            <div className="col-sm-3">Email</div>
                            <div className="col-sm-2">Số điện thoại</div>
                            <div className="col-sm-2">Vài trò </div>
                            <div className="col-sm-2">Hành động</div>
                        </div>
                    </div>
                    <div className={clsx(styles.user_list_container)}>
                        {users.map((user, index) => (
                            <div className={clsx(styles.main_table)} key={index}>
                                <div className="row">
                                    <div className="col-sm-1">
                                        <input
                                            type="checkbox"
                                            checked={checked.includes(user._id)}
                                            onChange={() => handleCheck(user._id)}
                                        />
                                    </div>
                                    <div className="col-sm-2">{user.name}</div>
                                    <div className="col-sm-3">{user.email}</div>
                                    <div className="col-sm-2">{user.phone}</div>
                                    <div className="col-sm-2">{user.roles}</div>
                                    <div className="col-sm-2" style={{ display: 'flex' }}>
                                        <div className={clsx(styles.repair)}>
                                            <FontAwesomeIcon
                                                icon={faPen}
                                                onClick={() => handleClickRepairIdUser(user)}
                                            />
                                        </div>

                                        <div className={clsx(styles.delete)}>
                                            <FontAwesomeIcon
                                                icon={faTrash}
                                                onClick={() => handleDeleteUser(user._id, user.name)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManangerAccount;
