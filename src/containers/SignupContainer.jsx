import styles from '@/styles/Signup.module.scss';
import { useRef } from 'react';
const CreateAccount = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmRef = useRef(null);
    return (
        <div className={styles.signup}>
            <h2>Create Account</h2>
            <form>
                <div>
                    <label htmlFor="email" placeholder="enter your email">email</label>
                    <input ref={emailRef} type="text"  />
                </div>
                <div>
                    <label htmlFor="password" placeholder="enter your password">password</label>
                    <input ref={passwordRef} type="text"  />
                </div>
                <div>
                    <label htmlFor="confirm-password" placeholder="enter your password">confirm password</label>
                    <input ref={confirmRef} type="text"  />
                </div>
                <button type='submit'>create</button>
            </form>

        </div>
    );
}

export default CreateAccount;