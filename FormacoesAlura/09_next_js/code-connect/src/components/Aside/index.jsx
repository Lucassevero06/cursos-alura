import Image from 'next/image';
import styles from './aside.module.css';

import logo from './logo.png';

export const Aside = () => {
    return (
        <aside className={styles.aside}>
            {/* <img src="/logo.png" alt="Logo Code Connect" /> */}
            <Image src={logo} alt='Logo Code Connect'/>
        </aside>
    );
}