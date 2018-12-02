import md5 from 'md5';
import client from './client';
import { User } from '../store/user/types';

export type ResponseData<T> = {
    status: number;
    result?: T;
    success: boolean;
    token?: string;
    code: string;
    message?: string;
};
function dealResponse(data: ResponseData<User>): Promise<{ token: string; user: User }> {
    if (data.status === 200 && data.success) {
        if (data.result && data.token) {
            return Promise.resolve({ token: data.token, user: data.result });
        } else {
            return Promise.reject({ status: data.status, code: data.code, message: data.message });
        }
    } else {
        return Promise.reject({ status: data.status, code: data.code, message: data.message });
    }
}
// user login
export async function login(username: string, password: string, countryCode?: string): Promise<{ token: string; user: User }> {
    try {
        const { data } = await client.post<ResponseData<User>>('/v1/user/login', { value: username, password: md5(password), code: countryCode });
        return dealResponse(data);
    } catch (e) {
        return Promise.reject(e);
    }
}

// user info
export async function info(): Promise<{ token: string; user: User }> {
    try {
        const { data } = await client.post<ResponseData<User>>('/v1/user/info', {});
        return dealResponse(data);
    } catch (e) {
        return Promise.reject(e);
    }
}

// user sendChangePasswordMessage
export async function sendChangePasswordMessage(phone: string): Promise<string> {
    try {
        const { data } = await client.post<ResponseData<string>>('/v1/user/sendChangePasswordMessage2', { phone });

        if (data.success && data.status === 200 && data.result) {
            return Promise.resolve(data.result);
        } else {
            return Promise.reject({ status: data.status, code: data.code, message: data.message });
        }
    } catch (e) {
        return Promise.reject(e);
    }
}

// user changePasswordByMessage
export async function changePasswordByMessage(info: string, code: string, password: string): Promise<boolean> {
    try {
        const { data } = await client.post<ResponseData<boolean>>('/v1/user/changePasswordByMessage2', { phoneInfo: info, code, newPassword: md5(password) });

        if (data.success && data.status === 200 && data.result) {
            return Promise.resolve(data.result);
        } else {
            return Promise.reject({ status: data.status, code: data.code, message: data.message });
        }
    } catch (e) {
        return Promise.reject(e);
    }
}
