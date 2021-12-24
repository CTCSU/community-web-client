import { connect } from 'dva';
import React from 'react';

const UserLayout = props => {
  const { children } = props;
  return <div>{children}</div>;
};

export default connect(({ settings }) => ({ ...settings }))(UserLayout);
