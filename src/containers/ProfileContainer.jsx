import { useAuth } from "@/hooks/useAuth";
import styles from "@/styles/profileContainer.module.scss";
import { useRouter } from "next/router";
const ProfileContainer = () => {
    const auth = useAuth();
    const router = useRouter();
    const handleChangeProfilePass = () => {
        router.push('/change-password-profile');
    }
    const handleDeleteAccount = () => {
        router.push('/delete-account');
    }
    
    
    return (
        <div>
            <h1 className={styles["title-profile"]} >Your profile:</h1>
            <h2 className={styles["user-profile"]}>{`email: ${auth?.user?.email}`}</h2>
            <div className={styles["buttons-container"]}>
                <button onClick={handleChangeProfilePass} className={styles["button-profile"]}>change password</button>
                <button onClick={handleDeleteAccount} className={styles["button-profile"]}>delete account</button>
            </div>
        </div>
    );
}

export default ProfileContainer;