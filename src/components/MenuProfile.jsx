import styles from '@/styles/menuProfile.module.scss';
import { useAuth } from '@/hooks/useAuth';
const MenuProfile = ({ user }) => {
    const auth = useAuth();
    return (
        <div className={styles['menu-profile']}>
          <div className={styles['user']}>
            <span>profile</span>
            <span>config</span>
          </div>
          <div className={styles['logout']} onClick={()=>{auth.logout()}} >log out</div>    
        </div>
    );
}

export default MenuProfile;