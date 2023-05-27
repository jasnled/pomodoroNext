import styles from '@/styles/changePasswordContainer.module.scss';
const ChangePassContainer = () => {
    return (
        <div className={styles['change-password-container']}>
            <h2>Change Password</h2>
            <form>
                <div>
                    <label htmlFor="newPassword" >new password*</label>
                    <input required type="text" />
                </div>
                <div>
                    <label htmlFor="confirmNewPassword" >confirm new password*</label>
                    <input required type="text" />
                </div>
                <button type='submit'>change</button>
            </form>
        </div>
    );
}

export default ChangePassContainer;