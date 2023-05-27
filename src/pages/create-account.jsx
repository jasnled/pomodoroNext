import styles from '@/styles/CreateAccount.module.scss';
import SignupContainer from "@/containers/SignupContainer";

const signin = () => {
    return (
        <div className={styles['signup-container']}>
            <SignupContainer/>
        </div>
    );
}

export default signin;