import md5 from 'md5';
import client from './client';

export async function login(username: string, password: string, code?: string): Promise<any> {
    try {
        const { data } = await client.post<{ status: number; result: any; success: boolean; token: string }>('/v1/user/login', { value: username, password: md5(password), code });
        if (data.status === 200 && data.success) {
            client.defaults.headers.common['authorization'] = `Bearer ${data.token}`;
            return Promise.resolve(data.result);
        } else {
            return Promise.reject(data.result);
        }
    } catch (e) {
        return Promise.reject(e);
    }
}
