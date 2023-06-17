
import { Icon } from 'react-icons-kit';
import { xSquare } from 'react-icons-kit/feather/xSquare';
import styles from '@/styles/alert.module.scss';

const Alert = ({alert:{alert}, alert:{toggleActiveAlert}}) => {
    return (
        <>
            {alert?.active && (
            <div id={styles["alert"]}>
                <div id={styles["message-alert"]}>{`${alert.message}`}</div>
                <Icon id={styles["close-alert"]} onClick={toggleActiveAlert} icon={xSquare}/>
            </div>
            )}
        </>
    );
}

export default Alert;