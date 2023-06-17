import React, { useEffect, useState } from 'react';
import styles from '@/styles/header.module.scss';
import Link from 'next/link';
import MenuProfile from '@/components/MenuProfile';
import MobileMenu from '@/components/MobileMenu';
import { useAuth } from '@/hooks/useAuth';

const Header = () => {
    const [iconMenu, setIconMenu]=useState(false);
    const toggleMobileMenu = () => {
        setIconMenu(!iconMenu);
    };
    const [menuProfile, setMenuProfile]=useState(false);
    const toggleMenuProfile = () =>{
        setMenuProfile(!menuProfile);
    }

    const auth = useAuth();
    
    useEffect(()=>{
        auth.signIn();
    },[]);
    console.log(auth.user);
    return (
    <div className={styles['menu-container']}>
        <svg className={styles['mobile-menu']} onClick={toggleMobileMenu} viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="5"></rect>
          <rect y="30" width="100" height="5"></rect>
          <rect y="60" width="100" height="5"></rect>
        </svg>
        {iconMenu && <MobileMenu toggleMobileMenu={toggleMobileMenu}/>}
        <nav className = {styles.menu}>
            <Link href={'/'} className = {styles["menu-item"]}>pomodoro</Link>
            <Link href={'/report'} className = {`${styles["menu-item"]} ${styles.report}`} >report</Link>
            {   
                auth?.user ? <span className = {styles["menu-item"]} onClick={()=> toggleMenuProfile()}>{auth?.user?.email}</span>:<Link href={'/login'} className = {styles["menu-item"]}>log in</Link>
            }
        </nav>
        {menuProfile &&<MenuProfile/>}
    </div>
    );
}

export default Header;