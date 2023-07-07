import styles from "@/styles/configContainer.module.scss";
import Alert from "@/components/Alert";
import { useAlert } from "@/hooks/useAlert.js";
import { useAuth } from "@/hooks/useAuth";
import { useRef } from "react";
import { changeConfigSchema } from "@/schemas/authSchema";
import axios from "axios";
import { endPoint } from "@/services/api";
const ConfigContainer = () => {

    const alert = useAlert();
    const auth = useAuth();
    const pomodoroRef = useRef(null);
    const shortBreakRef = useRef(null);
    const longBreakRef = useRef(null);

    const handleChangeConfig = async (event) => {
      event.preventDefault();
      const pomodoro = pomodoroRef.current.value*60;
      const shortBreak = shortBreakRef.current.value*60;
      const longBreak = longBreakRef.current.value*60;
      let data = {};
      const options = {
        headers: {
            accept: '*/*',
            'Content-type': 'application/json',
        }
    };
      if(pomodoro){
        data={pomodoro};
      };
      if(shortBreak){
        data={
          ...data,
          shortBreak
        };
      };
      if(longBreak){
        data={
          ...data,
          longBreak
        }
      };
      if(Object.entries(data).length){
        console.log(Object.entries(data).length);
        const {error, value} = changeConfigSchema.validate(data);
        console.log(error)
        if(error){
          alert.setAlert({
            ...alert.alert,
            active:true,
            message: "values not valide"
          });
          return;
        }else{
          try {
            const rta = await axios.patch(endPoint.config.changeConfig, value, options);
          } catch (error) {
            alert.setAlert({
              ...alert.alert,
              active:true,
              message: `${error}`
            }); 
            return;
          }
        }
        alert.setAlert({
          ...alert.alert,
          active:true,
          message: `changed config`
        });
        await auth.signIn();
      };
      
    };
    return (
        <div className={styles["config-container"]}>
          <Alert alert={alert}/>
          <div className={styles["form-container"]}>
            <form onSubmit={handleChangeConfig}>
              <h2 className={styles["config-item"]}>{`Time (minutes)`}</h2>
              <div className={styles["config-item"]}>
                <span>pomodoro</span>
                <input defaultValue={auth.user?.config.pomodoro/60} ref={pomodoroRef} type="text"/>
              </div>
              <div className={styles["config-item"]}>
                <span>short break</span>
                <input defaultValue={auth.user?.config.shortBreak/60} ref={shortBreakRef} type="text"/>
              </div>
              <div className={styles["config-item"]}>
                <span>long break</span>
                <input defaultValue={auth.user?.config.longBreak/60} ref={longBreakRef} type="text"/>
              </div>
              <button type="submit">ok</button>
            </form>
          </div>
        </div>
    );
}

export default ConfigContainer;