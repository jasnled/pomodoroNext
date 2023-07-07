import styles from "@/styles/config.module.scss";
import ConfigContainer from "@/containers/ConfigContainer.jsx";
const config = () => {
    return (
        <div className={styles["config"]}>
            <ConfigContainer></ConfigContainer>
        </div>
    );
}

export default config;