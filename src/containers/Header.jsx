import React from 'react';
import styles from '@/styles/header.module.scss';
import Link from 'next/link';
import MenuProfile from '@/components/MenuProfile';

const Header = () => {

    return (
    <div className={styles['menu-container']}>
        <svg className={styles['mobile-menu']} viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="5"></rect>
          <rect y="30" width="100" height="5"></rect>
          <rect y="60" width="100" height="5"></rect>
        </svg>
        <nav className = {styles.menu}>
            <Link href={'/'} className = {styles["menu-item"]}>pomodoro</Link>
            <Link href={'/report'} className = {`${styles["menu-item"]} ${styles.report}`} >report</Link>
            <Link href={'/login'} className = {styles["menu-item"]}>log in</Link>
        </nav>
        {true &&<MenuProfile/>}
    </div>
    );
}

export default Header;