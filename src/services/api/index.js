const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoint = {
    auth: {
        login: `${API+VERSION}/auth/login/`,
        recovery: `${API+VERSION}/auth/recovery/`,
        changePassword: `${API+VERSION}/auth/change-password/`
    },
    profile: {
        profile:`${API+VERSION}/profile/`,
    }
}

export {endPoint};