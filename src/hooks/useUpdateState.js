import { endPoint } from "@/services/api";
import axios from "axios";

const options = {
    headers: {
        accept: '*/*',
        'Content-type': 'application/json',
    }
};

const useUpdateState = () => {

    const updateTask = async (id, data) => {
        try {
            console.log(`de id llego ${id}`)
            await axios.patch(endPoint.task.update(id), data, options);
        } catch (error) {
            
        }
    }

    const updateUser = async (data) => {
        try {
            await axios.patch(endPoint.user.update, data, options);
        } catch (error) {
            
        }
    };

    return ({
        updateTask,
        updateUser
    });
}

export{useUpdateState};