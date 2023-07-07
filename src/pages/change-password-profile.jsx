import ChangePassProfileContainer from '@/containers/ChangePassProfileContainer.jsx';
import styles from '@/styles/changePass.module.scss';

const changePassword = () => {
    return (
        <div className={styles["change-password"]}>
            <ChangePassProfileContainer/>
        </div>
    );
}

export default changePassword;