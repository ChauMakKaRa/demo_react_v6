import clsx from 'clsx';
import styles from './MyAccount.module.scss';
import Button from '@/components/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/config-api';
function MyAccount() {
    const [user, setUser] = useState('');
    const [name, setName] = useState('');
    const [selectedGender, setSelectedGender] = useState(null);
    const [avatar, setAvatar] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const id_user = sessionStorage.getItem('_id');
            try {
                const respones = await axios.get(`${api.user}?userId=${id_user}`);
                const data = respones.data;
                setUser(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const hidePartialString = (inputString) => {
        if (typeof inputString !== 'string') {
            return 'Vui lòng nhập chuỗi';
        }
        if (inputString.length < 4) {
            return inputString;
        }

        const firstTwoChars = inputString.substring(0, 2);
        const visibleChars = inputString.slice(-2);
        const hiddenChars = '*'.repeat(inputString.length - 2);
        return firstTwoChars + hiddenChars + visibleChars;
    };

    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
    };
    const handleSave = () => {
        const userId = sessionStorage.getItem('_id');
        const fetchData = async () => {
            try {
                await axios.patch(`${api.my_account}?user_id=${userId}`, {
                    name: name,
                    selectedGender: selectedGender,
                    avatar: avatar.preview,
                });
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        window.location.reload();
    };

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);

    const handleAvata = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
    };
    return (
        <div className={clsx(styles.my_account_page)}>
            <div className={clsx(styles.no_content)}></div>
            <div className="row" style={{ margin: '15px' }}>
                <div className={clsx(styles.my_file)}>
                    <h1>Hồ sơ của tôi</h1>
                    <div> Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
                </div>
                <div className="row">
                    <div className="col-sm-8" style={{ marginTop: '40px' }}>
                        <div className={clsx(styles.name, styles.margin_bt)}>
                            <div className="row">
                                <div className="col-sm-3" style={{ marginTop: '10px' }}>
                                    Tên
                                </div>
                                <div className="col-sm-7">
                                    <input
                                        type="text"
                                        placeholder={`${user.name}`}
                                        onChange={(e) => setName(e.target.value)}
                                        className={clsx(styles.input_name)}
                                    />
                                </div>
                                <div className="col-sm-2"></div>
                            </div>
                        </div>
                        <div className={clsx(styles.email, styles.margin_bt)}>
                            <div className="row">
                                <div className="col-sm-3">Email</div>
                                <div className="col-sm-7">
                                    <span>{hidePartialString(user.email)}</span>
                                </div>
                                <div className="col-sm-2">
                                    <Button href="#" styles={{ color: 'black' }}>
                                        Thay đổi
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className={clsx(styles.number_phone, styles.margin_bt)}>
                            <div className="row">
                                <div className="col-sm-3">Số điện thoại</div>
                                <div className="col-sm-7">
                                    <span>{hidePartialString(user.phone)}</span>
                                </div>
                                <div className="col-sm-2">
                                    <Button href="#" styles={{ color: 'black' }}>
                                        Thay đổi
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className={clsx(styles.gender_group, styles.margin_bt)}>
                            <div className="row">
                                <div className="col-sm-3">Giới tính</div>
                                <div className="col-sm-7">
                                    <div className={clsx(styles.gender_group1)}>
                                        <div className={clsx(styles.gender)}>
                                            Nam
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="Nam"
                                                checked={selectedGender === `Nam`}
                                                onChange={handleGenderChange}
                                                className={clsx(styles.input_gender)}
                                            />
                                        </div>
                                        <div className={clsx(styles.gender)}>
                                            Nữ
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="Nữ"
                                                checked={selectedGender === 'Nữ'}
                                                onChange={handleGenderChange}
                                                className={clsx(styles.input_gender)}
                                            />
                                        </div>
                                        <div className={clsx(styles.gender)}>
                                            Khác
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="Khác"
                                                checked={selectedGender === 'Khác'}
                                                onChange={handleGenderChange}
                                                className={clsx(styles.input_gender)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className={clsx(styles.avatar_bigs)}>
                            {avatar ? (
                                <>
                                    <img
                                        src={avatar.preview}
                                        alt="have_avatar"
                                        style={{ borderRadius: '50%' }}
                                        width={100}
                                        height={100}
                                    />
                                </>
                            ) : (
                                <>
                                    <img
                                        src={user.avatar}
                                        alt="null_avatar"
                                        style={{ borderRadius: '50%' }}
                                        width={100}
                                        height={100}
                                    />
                                </>
                            )}
                        </div>
                        <div className={clsx(styles.btn_choice_file_avatar)}>
                            <div className="Content">
                                <input type="file" onChange={handleAvata} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-10">
                            <div className={clsx(styles.btn_save)}>
                                <Button onClick={handleSave} style={{ color: 'white' }}>
                                    LƯU
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyAccount;
