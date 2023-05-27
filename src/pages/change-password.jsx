import ChangePassContainer from '@/containers/ChangePassContainer.jsx';
import styles from '@/styles/changePass.module.scss';

const changePassword = () => {
    return (
        <div className={styles["change-password"]}>
            <ChangePassContainer/>
        </div>
    );
}

export default changePassword;