import { useState } from 'react';
import styles from './Form.module.scss';
import clsx from 'clsx';
import Button from '@/components/Button';
import axios from 'axios';
import api from '@/config-api';
function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [roles, setRoles] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const respones = await axios.post(`${api.admin}`, {
                name: name,
                email: email,
                roles: roles,
                password: password,
            });
            const data = respones.data;
            if (data.notification) {
                alert(data.notification);
            }
            if (data.success) {
                alert(data.success);
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <form onSubmit={handleSubmit} className={clsx(styles.Form)}>
            <div className={clsx(styles.delete_form)}></div>
            <div>
                <label>Tên người dùng:</label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Vai trò:</label>
                <select name="roles" value={roles} onChange={(e) => setRoles(e.target.value)} required>
                    <option></option>
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                    <option value="Shipper">Shipper</option>
                </select>
            </div>
            <div>
                <label>Mật khẩu đăng nhập:</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <Button type="submit" className={clsx(styles.btn_submit)}>
                Thêm
            </Button>
        </form>
    );
}

export default Form;
