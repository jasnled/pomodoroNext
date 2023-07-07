import styles from '@/styles/deleteAccount.module.scss';
import DeleteContainer from '@/containers/DeleteContainer.jsx';
const deleteAccount = () => {
    return (
        <div className={styles["delete-section"]}>
            <DeleteContainer/>
        </div>
    );
}

export default deleteAccount;