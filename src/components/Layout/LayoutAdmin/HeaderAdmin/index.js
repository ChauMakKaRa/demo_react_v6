import clsx from 'clsx';
import styles from './HeaderAdmin.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBookmark, faMessage, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Button from '@/components/Button';

function HeaderAdmin({ inputId }) {
    const [key, setKey] = useState('');
    const handleChangeKey = (e) => {
        setKey(e.target.value);
    };
    const handleSearchWithKey = () => {
        console.log(key);
    };
    return (
        <>
            <div className={clsx(styles.menu_toggle)}>
                <label htmlFor={inputId}>
                    <FontAwesomeIcon icon={faBars} />
                </label>{' '}
            </div>
            <div className={clsx(styles.search)}>
                <input type="text" className={clsx(styles.input_search)} value={key} onChange={handleChangeKey} />
                <Button className={clsx(styles.btn_search)} onClick={handleSearchWithKey}>
                    <FontAwesomeIcon className={clsx(styles.header_icon)} icon={faSearch} />
                </Button>
            </div>
            <div className={clsx(styles.header_icons)}>
                <FontAwesomeIcon className={clsx(styles.header_icon)} icon={faBookmark} />
                <FontAwesomeIcon className={clsx(styles.header_icon)} icon={faMessage} />
            </div>
        </>
    );
}

export default HeaderAdmin;
