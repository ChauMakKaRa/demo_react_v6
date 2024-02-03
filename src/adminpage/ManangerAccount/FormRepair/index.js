import clsx from 'clsx';
import styles from './FormRepair.module.scss';
import { useState } from 'react';
import Button from '@/components/Button';
import axios from 'axios';
import api from '@/config-api';

function FormRepair({ user }) {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [roles, setRoles] = useState(user.roles);
    const [password, setPassword] = useState(user.password);

    const handleSubmit = async (e) => {
        console.log(name, email, roles, password);
        try {
            const respones = await axios.put(`${api.admin}`, {
                name: name,
                email: email,
                roles: roles,
                password: password,
                id: user._id,
            });
            const data = respones.data;
            alert(data.message);
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
                Cập nhật
            </Button>
        </form>
    );
}

export default FormRepair;
