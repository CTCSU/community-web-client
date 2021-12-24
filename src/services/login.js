import request from '@/utils/request';
import API_HOST from '@/utils/apiHost';

export async function login(params) {
  return request(`${API_HOST}/login`, {
    method: 'POST',
    data: params,
  });
}
export async function register(params) {
  return request(`${API_HOST}/register`, {
    method: 'POST',
    data: params,
  });
}
