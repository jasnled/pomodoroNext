import styles from "@/styles/recoveryContainer.module.scss";
const RecoveryContainer = () => {
  return (
    <div className={styles["recovery-container"]}>
      <form>
        <span>Enter your user account</span>
        <div>
          <label htmlFor="email" placeholder="enter your email">
            email
          </label>
          <input type="text" />
        </div>
        <button type="submit">send email</button>
      </form>
    </div>
  );
};

export default RecoveryContainer;
