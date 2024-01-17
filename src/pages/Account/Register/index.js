import clsx from 'clsx';
import styles from './Register.module.scss';
import { useState } from 'react';
import axios from 'axios';
function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('url_of_register_endpoint', {
                username: username,
                email: email,
                password: password,
            });
            console.log(response.data); // Xử lý dữ liệu phản hồi ở đây
        } catch (error) {
            console.error('Đăng ký thất bại:', error);
        }
    };
    return (
        <div className={clsx(styles.wrapper)}>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Tên đăng nhập:</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Mật khẩu:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit">Đăng ký</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
