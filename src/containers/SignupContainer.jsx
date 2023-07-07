import styles from '@/styles/Signup.module.scss';
import { useRef } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useAlert } from '@/hooks/useAlert.js';
import Alert from '@/components/Alert';
import { createUserSchema } from '@/schemas/authSchema.js';
import { endPoint } from '@/services/api';

const CreateAccount = () => {
    const router = useRouter();
    const alert = useAlert();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPassRef = useRef(null);

    async function handleCreateAccount(e){
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPass = confirmPassRef.current.value;
        const options = {
            headers: {
                accept: '*/*',
                'Content-type': 'application/json',
            }
        };
        if(!(password == confirmPass)){
            alert.setAlert({
                ...alert.alert,
                active:true,
                message: "the passwords do not match"
            });
            return
        }
        const { error, value } =  createUserSchema.validate({email, password, confirmPass});
        
        if(error){
            alert.setAlert({
                ...alert.alert,
                active:true,
                message: `${error}`,
            })
            return
        }else{
            try{
                const data = {
                    email:value.email,
                    password:value.password
                }
                await axios.post(endPoint.user.create, data, options);
            }catch(err){
                alert.setAlert({
                    ...alert.alert,
                    active:true,
                    message: `${err}`,
                });
               
                return
            }
            alert.setAlert({
                ...alert.alert,
                active:true,
                message: `user created`,
            });
            setTimeout(()=>{
                router.push("/login")
            },2000)
        }
        



    }

    return (
        <div className={styles.signup}>
            <Alert alert={alert}/>
            <h2>Create Account</h2>
            <form onSubmit={handleCreateAccount}>
                <div>
                    <label htmlFor="email" placeholder="enter your email">email*</label>
                    <input required ref={emailRef} type="text"  />
                </div>
                <div>
                    <label htmlFor="password" placeholder="enter your password">password*</label>
                    <input required ref={passwordRef} placeholder={'Enter password (6-33 characters)'} type="text"  />
                </div>
                <div>
                    <label htmlFor="confirm-password">confirm password*</label>
                    <input required ref={confirmPassRef} type="text" placeholder={"Confirm password"}/>
                </div>
                <button type='submit'>create</button>
            </form>

        </div>
    );
}

export default CreateAccount;