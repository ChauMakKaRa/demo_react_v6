import clsx from 'clsx';
import styles from './ContactPageAdmin.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/config-api';

function ContactPageAdmin() {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const respones = await axios.get(`${api.contacts_admin}`);
                const data = respones.data;
                setContacts(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.page_contact_admin)}>
                <div className={clsx(styles.head_contact)}>
                    <div className={clsx(styles.content_contact)}>Quản lý liên hệ</div>
                    <div className={clsx(styles.no_content)}></div>
                    <div className={clsx(styles.search)}>
                        <input type="text" placeholder="Nhập số điện thoại..." />
                        <FontAwesomeIcon className={clsx(styles.icon_search)} icon={faSearch} />
                    </div>
                </div>
                <div className={clsx(styles.body_contact)}>
                    <div className={clsx(styles.table)}>
                        <div className={clsx(styles.head_table)}>
                            <div className="row">
                                <div className="col-sm-1">
                                    <b>Tên</b>
                                </div>
                                <div className="col-sm-2">
                                    <b>Địa chỉ</b>
                                </div>
                                <div className="col-sm-2">
                                    <b>Số điện thoại</b>
                                </div>
                                <div className="col-sm-2">
                                    <b>Nội dung</b>
                                </div>
                                <div className="col-sm-3">
                                    <b>Thời gian liên hệ</b>
                                </div>
                                <div className="col-sm-1">
                                    <b>Phản hồi</b>
                                </div>
                                <div className="col-sm-1"></div>
                            </div>
                        </div>
                        {contacts.map((contact, index) => (
                            <div key={index} className={clsx(styles.body_contact)}>
                                <div className="row">
                                    <div className="col-sm-1">{contact.name}</div>
                                    <div className="col-sm-2">{contact.email}</div>
                                    <div className="col-sm-2">{contact.phone}</div>
                                    <div className="col-sm-2">{contact.content}</div>
                                    <div className="col-sm-3">{contact.createdAt}</div>
                                    <div className="col-sm-1">
                                        <b>Phản hồi</b>
                                    </div>
                                    <div className="col-sm-1">
                                        <FontAwesomeIcon className={clsx(styles.icon_delete)} icon={faTrash} />
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

export default ContactPageAdmin;
