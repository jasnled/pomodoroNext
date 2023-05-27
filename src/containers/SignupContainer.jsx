import styles from '@/styles/Signup.module.scss';

const CreateAccount = () => {
    return (
        <div className={styles.signup}>
            <h2>Create Account</h2>
            <form>
                <div>
                    <label htmlFor="email" placeholder="enter your email">email</label>
                    <input type="text"  />
                </div>
                <div>
                    <label htmlFor="password" placeholder="enter your password">username</label>
                    <input type="text"  />
                </div>
                <button type='submit'>create</button>
            </form>

        </div>
    );
}

export default CreateAccount;