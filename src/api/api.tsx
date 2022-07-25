import axios from "axios";

export const instance = axios.create({
    // baseURL: 'http://localhost:7542/2.0/',
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true
})

export const authAPI = {
    // ping(frontTime: string) {
    //     return instance.post(`/ping`, frontTime)
    // },
    me() {
        return instance.post(`auth/me`)
    },
    register(email: string, password: string) {
        return instance.post(`/auth/register`, {email, password})
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/me`)
    }
}

export const passwordAPI = {
    forgot(email: string) {
        return instance.post(`auth/forgot`, {email})
    },
    setNewPassword(password: string, resetPasswordToken: string) {
        return instance.post(`auth/set-new-password`, {password, resetPasswordToken})
    }
}

export const profileAPI = {
    changeProfile(payload: { name: string, avatar?: string }) {
        return instance.put<ResponseUpdateUserType>(`auth/me`, payload)
    }
}


export type ForgotDataType = {
    email: string
    from: string
    message: string
}

export type RecoverResponseType = {
    answer: boolean,
    html: boolean,
    info: string,
    success: boolean
}

export type ResponseUpdateUserType = {
    updatedUser: {
        _id: string;
        email: string;
        name: string;
        avatar?: string;
        publicCardPacksCount: number;
        created: Date;
        updated: Date;
        isAdmin: boolean;
        verified: boolean; // подтвердил ли почту
        rememberMe: boolean;
        error?: string;
    },
    error?: string
}