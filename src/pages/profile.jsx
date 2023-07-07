import ProfileContainer from "@/containers/ProfileContainer";
import styles from "@/styles/profile.module.scss";

const Profile = () => {
    return (
    <div className={styles["profile-container"]}>
        <ProfileContainer/>
    </div>
    );
}

export default Profile;