import { login as loginService, register as registerService } from '@/services/login';
import { message } from 'antd';
import { history } from 'umi';

const namespace = 'login';
const selectState = state => state[namespace];

const Model = {
  namespace: 'login',
  state: {
    username: '',
    password: '',
  },
  effects: {
    *login(_, { call, select }) {
      const state = yield select(selectState);
      const result = yield call(loginService, state);

      if (result.status === 'ok') {
        localStorage.setItem('token', result.token);
        history.push('/login');
      }
    },

    *register(_, { call, select }) {
      const state = yield select(selectState);
      const result = yield call(registerService, state);

      if (result.status === 'ok') {
        message.success('register successful');
      }
    },
  },
  reducers: {
    overrideStateProps(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
export default Model;
