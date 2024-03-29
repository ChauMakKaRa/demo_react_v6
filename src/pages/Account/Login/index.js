import React, { useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Login.module.scss';
import api from '@/config-api';
import axios from 'axios';
import images from '@/assets/images';
import Button from '@/components/Button';
// import { GoogleLogin } from 'react-google-login';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${api.login}`, {
                email: email,
                password: password,
            });
            sessionStorage.setItem('email', response.data.email);
            sessionStorage.setItem('id', response.data.id);
            sessionStorage.setItem('_id', response.data._id);
            sessionStorage.setItem('roles', response.data.roles);
            if (sessionStorage.getItem('roles') === 'User') {
                navigate('/');
            } else if (sessionStorage.getItem('roles') === 'Admin') {
                navigate('/admin');
            } else if (sessionStorage.getItem('roles') === 'Shipper') {
                navigate('/carreir/shipper');
            } else {
                setError(response.data.error);
                ref.current.focus();
            }
        } catch (error) {
            console.error('Đăng nhập thất bại:', error);
        }
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setError('');
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setError('');
    };

    const ref = useRef();
    // const responseGoogle = (response) => {
    //     console.log(response);
    //     if (response && response.profileObj && response.profileObj.email) {
    //         localStorage.setItem('userEmail', response.profileObj.email);
    //         // Lưu tài khoản email vào localStorage khi đăng nhập thành công
    //     } else {
    //         console.error('Không thể tìm thấy email trong phản hồi từ Google');
    //     }
    // };
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.login)}>
                <img className={clsx(styles.background_login)} src={images.background_login} alt="login" />
                <div className={clsx(styles.forms)}>
                    <form onSubmit={handleSubmit}>
                        <div className={clsx(styles.in_form)}>
                            <div className={clsx(styles.content_login)}>
                                <h1>Đăng nhập</h1>
                            </div>
                            <div>
                                <label>Email: </label>
                                <input
                                    ref={ref}
                                    type="text"
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder="Nhập email của bạn..."
                                    required
                                />
                            </div>
                            <div>
                                <label>Mật khẩu:</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    placeholder="Nhập mật khẩu..."
                                    required
                                />
                            </div>
                            <div className={clsx(styles.remember)}>
                                <input type="checkbox" className={clsx(styles.checkbox)} /> Nhớ mật khẩu
                            </div>
                            <div className={clsx(styles.error)}>{error}</div>
                            <button type="submit" className={clsx(styles.btn_login)}>
                                Đăng nhập
                            </button>
                            <div className="row mt-4">
                                <div className="col-sm-6">
                                    <Button to={'/forget_password'}>
                                        <span className={clsx(styles.no_account_content)}>Quên mật khẩu</span>
                                    </Button>
                                </div>
                                <div className="col-sm-6">
                                    <Button className={clsx(styles.no_account)} to="/register">
                                        <span className={clsx(styles.no_account_content)}>Đăng ký</span>
                                    </Button>
                                </div>
                            </div>
                            {/* <div>
                                <GoogleLogin
                                    clientId="395486207095-i7mfeorga8cbt0r3m061gobmr7omtu3e.apps.googleusercontent.com"
                                    buttonText="Login with Google"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />
                            </div> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
