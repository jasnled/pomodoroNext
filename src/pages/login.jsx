import LoginContainer from "@/containers/LoginContainer";
import styles from "@/styles/login.module.scss"
const login = () => {
    return (
        <div className={styles["login-container-main"]}>
            <LoginContainer/>
        </div>
    );
}

export default login;