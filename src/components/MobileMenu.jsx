import styles from '@/styles/mobileMenu.module.scss';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
const MobileMenu = ({toggleMobileMenu}) => {
    const auth = useAuth();
    const handleLogOut = () => {
        toggleMobileMenu();
        auth.logout();
    };
    return (
        <div className={styles['mobile-menu-container']}>
            <div>
                <Link href={"/"} className = {styles["mobile-menu-item"]} onClick={toggleMobileMenu}>pomodoro</Link>
                {
                !auth?.user?
                <Link href={"/login"} className = {styles["mobile-menu-item"]} onClick={toggleMobileMenu}>log in</Link>:
                <div className={styles.user} >
                    <Link href={"/report"} className = {styles["mobile-menu-item"]} onClick={toggleMobileMenu}>report</Link>
                    <Link href={"#"} className = {styles["mobile-menu-item"]} onClick={toggleMobileMenu}>profile</Link>
                    <Link href={"#"} className = {styles["mobile-menu-item"]} onClick={toggleMobileMenu}>config</Link>
                    <Link href={"/login"} className = {styles["mobile-menu-item"]} onClick={()=>{handleLogOut()}}>log out</Link>                    
                </div>
                }
            </div>
        </div>
    );
}

export default MobileMenu;