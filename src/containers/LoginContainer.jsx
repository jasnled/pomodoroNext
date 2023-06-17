import styles from "@/styles/loginContainer.module.scss"
import Link from "next/link";
import Alert from "@/components/Alert";
import { useRef, useState } from 'react';
import { useAuth } from "@/hooks/useAuth";
import { useAlert } from "@/hooks/useAlert"; 
import { loginSchema } from "@/schemas/authSchema";
import { Icon } from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';


const LoginContainer = () => {
    const auth = useAuth();
    const alert = useAlert({message:"incorrect username or password"});
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [typeInput, setTypeInput] = useState('password');
    const handleEyeOff = () =>{
        if(typeInput == 'password'){
            setTypeInput('text');
        } else {
            setTypeInput('password');
        }
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const { error, value } = loginSchema.validate({email, password});
        if(!error){
            
            auth.signIn(email, password);
            if (!auth.user && !alert.alert.active){
                alert.toggleActiveAlert();
            }
        }else{
            console.log("error de validacion");
        }  
    };
    return (
        <>
          
          <div className={styles["login-container"]}>
              <Alert alert={alert}/>
              <form onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor="email" placeholder="enter your email">email</label>
                      <input ref={emailRef} required type="text"  />
                  </div>
                  <div>
                      <label htmlFor="password" placeholder="enter your password">username</label>
                      <div id={styles["container-password"]}>
                          <input ref={passwordRef} required type={typeInput}/>
                          <Icon className={styles["icon-eyeoff"]} onClick={handleEyeOff} icon={eyeOff}/>
                      </div>
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
        </>
    );
}

export default LoginContainer;