import Alert from "@/components/Alert";
import { recoveryPasswordSchema } from "@/schemas/authSchema";
import styles from "@/styles/recoveryContainer.module.scss";
import { useRef } from "react";
import { useAlert } from "@/hooks/useAlert";
import axios from "axios";
import { endPoint } from "@/services/api";

const RecoveryContainer = () => {
  const alert = useAlert();
  const emailRef = useRef(null);

  const handleRecovery = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const options = {
      headers: {
          accept: '*/*',
          'Content-type': 'application/json',
      }
    };
    const {error, value} = recoveryPasswordSchema.validate({email});
    if(error){
      alert.setAlert({
        ...alert.alert,
        active:true,
        message: "email not valid"
      });
    }else{
      try{
        const response = await axios.post(endPoint.auth.recovery, value ,options);  
      }catch(err){
        alert.setAlert({
          ...alert.alert,
          active:true,
          message: `user not found`
        });
        return
      }
      alert.setAlert({
        ...alert.alert,
        active:true,
        message: `email sent`,
    });
    }

  };

  return (
    <div className={styles["recovery-container"]}>
      <Alert alert={alert}/>
      <form onSubmit={handleRecovery}>
        <span>Enter your user account</span>
        <div>
          <label htmlFor="email" placeholder="enter your email">
            email
          </label>
          <input required ref={emailRef} type="text" />
        </div>
        <button type="submit">send email</button>
      </form>
    </div>
  );
};

export default RecoveryContainer;
