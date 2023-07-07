import { useRef } from "react";
import styles from "@/styles/deleteContainer.module.scss";
import { useAuth } from "@/hooks/useAuth";
import { useAlert } from "@/hooks/useAlert";
import Alert from "@/components/Alert";
import { endPoint } from "@/services/api";
import axios from "axios";
const DeleteContainer = () => {
    const auth = useAuth();
    const alert = useAlert();
    const passwordRef = useRef(null);
    const handleDeleteAccount = async (event) => {
        event.preventDefault();
        const password = passwordRef.current.value;
        const options = {
            headers: {
                accept: '*/*',
                'Content-type': 'application/json',
            }
        };
        try {
            const rta = await axios.post(endPoint.auth.login, {email: auth.user.email, password}, options);
        } catch (error) {
            alert.setAlert({
                ...alert.alert,
                active:true,
                message: `Password not valide`
            });
            return;
        };
        try {
            await axios.delete(endPoint.profile.delete, options)
        } catch (error) {
            alert.setAlert({
                ...alert.alert,
                active:true,
                message: "There has been an error, try again"
            });
            return;
        }
        alert.setAlert({
            ...alert.alert,
            active:true,
            message: `Deleted account`
        });
        setTimeout(()=>{
            auth.logout();
        },1000);
        

        
    };
    return (
        <div className={styles.delete}>
            <Alert alert={alert}/>
            <div className={styles["delete-container"]}>
                <form onSubmit={handleDeleteAccount}>
                    <div >
                        <span>enter your password*</span>
                        <input type={"text"} required ref={passwordRef}/>
                    </div>
                    <button type="submit">Delete account</button>
                </form>
            </div>
        </div>
    );
}

export default DeleteContainer;