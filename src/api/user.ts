import md5 from 'md5';
import client from './client';
import { User } from '../store/user/types';

export type ResponseData = {
    status: number;
    result?: User;
    success: boolean;
    token: string;
    code: string;
    message: string;
};
function dealResponse(data: ResponseData): Promise<{ token: string; user: User }> {
    if (data.status === 200 && data.success) {
        if (data.result) {
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
        const { data } = await client.post<ResponseData>('/v1/user/login', { value: username, password: md5(password), code: countryCode });
        return dealResponse(data);
    } catch (e) {
        return Promise.reject(e);
    }
}

// user login
export async function info(): Promise<{ token: string; user: User }> {
    try {
        const { data } = await client.post<ResponseData>('/v1/user/info', {});
        return dealResponse(data);
    } catch (e) {
        return Promise.reject(e);
    }
}
