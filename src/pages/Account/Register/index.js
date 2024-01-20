import clsx from 'clsx';
import styles from './Register.module.scss';
import { useRef, useState } from 'react';
import axios from 'axios';
import images from '@/assets/images';
import api from '@/config-api';
function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordagain, setPasswordAgain] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(api.register, {
                name: name,
                email: email,
                password: password,
                passwordagain: passwordagain,
            });
            setError(response.data.error);
            setSuccess(response.data.success);
        } catch (error) {
            console.error('Đăng ký thất bại:', error);
        }
        ref.current.focus();
    };
    const handleNameChange = (e) => {
        setName(e.target.value);
        setError('');
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setError('');
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setError('');
    };
    const handlePassworAgain = (e) => {
        setPasswordAgain(e.target.value);
        setError('');
    };
    const ref = useRef();
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.register)}>
                <div className={clsx(styles.background_image)}>
                    <img src={images.background_login} width={'1150'} alt="background register" />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={clsx(styles.in_form)}>
                        <h1 className="text-center">Đăng ký</h1>
                        <div>
                            <label>Họ và Tên: </label>
                            <input ref={ref} type="text" value={name} onChange={handleNameChange} required />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="email" value={email} onChange={handleEmailChange} required />
                        </div>
                        <div>
                            <label>Mật khẩu:</label>
                            <input type="password" value={password} onChange={handlePasswordChange} required />
                        </div>
                        <div>
                            <label>Nhập lại mật khẩu:</label>
                            <input type="password" value={passwordagain} onChange={handlePassworAgain} required />
                        </div>
                        <div className={clsx(styles.error)}>
                            <span>{error}</span>
                            <span style={{ color: 'green' }}>{success}</span>
                        </div>
                        <button className={clsx(styles.btn_register)} type="submit">
                            Đăng ký
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
