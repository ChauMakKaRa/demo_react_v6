import clsx from 'clsx';
import styles from './Login.module.scss';
import api from '@/config-api';
import { useState } from 'react';
import axios from 'axios';
import { logged } from '@/components/Layout/components/Header';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${api.login}`, {
                email: email,
                password: password,
            });
            logged.id = response.data.id;
            logged.email = response.data.email;
            logged.currentUser = 'true';
        } catch (error) {
            console.error('Đăng nhập thất bại:', error);
        }
    };
    return (
        <div className={clsx(styles.wrapper)}>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Tên đăng nhập:</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Mật khẩu:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit">Đăng nhập</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
