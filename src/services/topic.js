import request from '@/utils/request';
import API_HOST from '@/utils/apiHost';

export async function login(params) {
  return request(`${API_HOST}/topics`, {
    method: 'POST',
    data: params,
  });
}
