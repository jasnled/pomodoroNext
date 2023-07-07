import styles from '@/styles/changePasswordContainer.module.scss';
import { useRef } from 'react'
import Alert from '@/components/Alert';
import { useAlert } from '@/hooks/useAlert';
import { useAuth } from '@/hooks/useAuth';
import { changePasswordSchema } from '@/schemas/authSchema';
import axios from 'axios';
import { endPoint } from '@/services/api';

const ChangePassContainer = () => {
    const passwordRef = useRef(null);
    const newPasswordRef = useRef(null);
    const confirmNewPasswordRef = useRef(null);
    const alert = useAlert();
    const auth = useAuth();

    const handleChangePass = async (event) => {
        event.preventDefault();
        const confirmNewPassword = confirmNewPasswordRef.current.value;
        const newPassword = newPasswordRef.current.value;
        const password = passwordRef.current.value;
        const options = {
            headers: {
                accept: '*/*',
                'Content-type': 'application/json',
            }
        };
        if(!(confirmNewPassword == newPassword)){
            alert.setAlert({
                ...alert.alert,
                active:true,
                message: "the passwords do not match"
              });
              return;
        }
        try {
            await axios.post(endPoint.auth.login, {email: auth.user.email, password}, options);
        } catch (error) {
            alert.setAlert({
                ...alert.alert,
                active:true,
                message: `old password not valide`
            });
            return;
        }
        const { error, value } = changePasswordSchema.validate({newPassword, confirmNewPassword});
        if(error){
            alert.setAlert({
                ...alert.alert,
                active:true,
                message: `${error}`
            });
        }else{
            
            try{
                const data = {newPassword: value.newPassword};
                console.log(data);
                await axios.post(endPoint.profile.changePassword, data, options);
                console.log("cambi");
            }catch(err){
                alert.setAlert({
                    ...alert.alert,
                    active:true,
                    message: `${err}`
                });
                return
            }    
        
            alert.setAlert({
                ...alert.alert,
                active:true,
                message: `changed password`
            });
        }
    }

    return (
        <div className={styles['change-password-container']}>
            <Alert alert={alert}/>
            <h2>Change Password</h2>
            <form onSubmit={handleChangePass}>
                <div>
                    <label htmlFor="password" >old password*</label>
                    <input ref={passwordRef} required type="text" />
                </div>
                <div>
                    <label htmlFor="newPassword" >new password*</label>
                    <input ref={newPasswordRef} required type="text" />
                </div>
                <div>
                    <label htmlFor="confirmNewPassword" >confirm new password*</label>
                    <input ref={confirmNewPasswordRef} required type="text" />
                </div>
                <button type='submit'>change</button>
            </form>
        </div>
    );
}

export default ChangePassContainer;