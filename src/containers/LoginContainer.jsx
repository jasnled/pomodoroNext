import styles from "@/styles/loginContainer.module.scss"
import Link from "next/link";
const LoginContainer = () => {
    return (
        <div className={styles["login-container"]}>
            <form>
                <div>
                    <label htmlFor="email" placeholder="enter your email">email</label>
                    <input type="text"  />
                </div>
                <div>
                    <label htmlFor="password" placeholder="enter your password">username</label>
                    <input type="text"  />
                </div>
                <div>
                    <Link className={styles["forgot-password"]}href={"/recovery-password"}>forgot your password?</Link>
                </div>
                <button type="submit">log in</button>
                <div className={styles["sign-up-container"]}>
                    <span>Need an account? <Link className={styles["sign-up"]} href={"/create-account"}>Sign up</Link></span>
                
                </div>
            </form>
        </div>
    );
}

export default LoginContainer;