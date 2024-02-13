import clsx from 'clsx';
import styles from './Contact.module.scss';
import Button from '@/components/Button';
import { useState } from 'react';
import axios from 'axios';
import api from '@/config-api';
function Contact() {
    const [name, setName] = useState('');
    const [numberPhone, setNumberPhone] = useState();
    const [content, setContent] = useState('');
    const userId = sessionStorage.getItem('email');

    const handleSubmitContact = async () => {
        try {
            const respones = await axios.post(`${api.contacts}`, {
                name: name,
                phone: numberPhone,
                content: content,
                userId: userId,
            });
            const data = respones.data;
            alert(data.message);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={clsx(styles.contact_page)}>
            <div className={clsx(styles.no_content)}></div>
            <div className={clsx(styles.main_contact)}>
                <div className="row">
                    <div className="col-sm-7">
                        <img
                            src="https://www.nextbe.it/wp-content/uploads/2021/09/contact-us.png"
                            alt="image_contact"
                            className={clsx(styles.image)}
                            width={500}
                        />
                    </div>
                    <div className="col-sm-5">
                        <form onSubmit={handleSubmitContact} className={clsx(styles.form_contact)}>
                            <div className={clsx(styles.content_contact)}>Liên hệ</div>
                            <div className={clsx(styles.name)}>
                                <label>Tên người liên hệ:</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Nhập tên..."
                                    required
                                />
                            </div>
                            <div className={clsx(styles.number_phone)}>
                                <label>Số điện thoại:</label>
                                <input
                                    type="text"
                                    value={numberPhone}
                                    onChange={(e) => setNumberPhone(e.target.value)}
                                    placeholder="Số điện thoại..."
                                    required
                                />
                            </div>
                            <div className={clsx(styles.number_phone)}>
                                <label>Nội dung:</label>
                                <textarea
                                    rows="4"
                                    cols="50"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    required
                                >
                                    Nhập văn bản ở đây...
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
    );
}

export default Contact;
