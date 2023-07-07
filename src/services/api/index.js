const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoint = {
    auth: {
        login: `${API+VERSION}/auth/login/`,
        recovery: `${API+VERSION}/auth/recovery/`,
        changePassword: `${API+VERSION}/auth/change-password/`,

    },
    profile: {
        profile:`${API+VERSION}/profile/`,
        changePassword:`${API+VERSION}/profile/change-password`,
        delete:`${API+VERSION}/profile/`
    },
    user: {
        create: `${API+VERSION}/users/`,
        update: `${API+VERSION}/users/`,
    },
    config:{
        changeConfig: `${API+VERSION}/config/`
    },
    task:{
        update:(id)=>`${API+VERSION}/tasks/${id}`,
        create:`${API+VERSION}/tasks/`,
        getAll:`${API+VERSION}/tasks/`,
        getOne: (id)=>`${API+VERSION}/tasks/${id}`,
        deleteDone:`${API+VERSION}/tasks/`,
        deleteOne: (id) => `${API+VERSION}/tasks/${id}`
    },
    pomodoro:{
        getAll:`${API+VERSION}/pomodoros/`,
        create:`${API+VERSION}/pomodoros/`,
        update:(id) => `${API+VERSION}/pomodoros/${id}`,
    }

}

export {endPoint};