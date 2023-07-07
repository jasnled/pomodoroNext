import styles from '@/styles/menuProfile.module.scss';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
const MenuProfile = () => {
    const auth = useAuth();
    return (
        <div className={styles['menu-profile']}>
          <div className={styles['user']}>
            <Link className={styles['user-item']} href={"/profile"}>profile</Link>
            <Link className={styles['user-item']} href={"/config"}>config</Link>
          </div>
          <div className={styles['logout']} onClick={()=>{auth.logout()}} >log out</div>    
        </div>
    );
}

export default MenuProfile;