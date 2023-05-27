import styles from '@/styles/menuProfile.module.scss';
const MenuProfile = ({ user }) => {
    return (
        <div className={styles['menu-profile']}>
          <div className={styles['user']}>
            <span>profile</span>
            <span>config</span>
          </div>
          <div className={styles['logout']}>log out</div>    
        </div>
    );
}

export default MenuProfile;