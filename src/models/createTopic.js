import { create as createService } from '@/services/topic';
import { message } from 'antd';
import { history } from 'umi';

const namespace = 'createTopic';
const selectState = state => state[namespace];

const Model = {
  namespace,
  state: {
    title: '',
    content: '',
  },
  effects: {
    *create(_, { call, select }) {
      const state = yield select(selectState);
      const result = yield call(createService, state);

      if (result.status === 'ok') {
        message.info('Success');
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
