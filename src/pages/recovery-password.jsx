import RecoveryContainer from "@/containers/RecoveryContainer";
import styles from "@/styles/recoveryPassword.module.scss";
const recoveryPassword = () => {
    return (
        <div className={styles["recovery-password"]}>
            <RecoveryContainer/>
        </div>
    );
}

export default recoveryPassword;