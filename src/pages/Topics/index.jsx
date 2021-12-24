import { Input, Card, Table } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { history } from 'umi';
import { connect } from 'dva';
import React from 'react';

@connect(({ topics }) => ({
  topics,
}))
export default class Topics extends React.Component {
  componentDidMount() {
    this.props.dispatch({ type: 'topics/fetchTopics' });
  }

  onSearch(value) {
    this.props.dispatch({
      type: 'topics/overrideStateProps',
      payload: { title: value },
    });
    this.props.dispatch({ type: 'topics/fetchTopics' });
  }

  render() {
    const { topics } = this.props;
    const columns = [
      { title: 'title', dataIndex: 'title', key: 'title' },
      { title: 'author', dataIndex: 'author_name', key: 'author_name' },
      { title: 'reply count', dataIndex: 'reply_count', key: 'reply_count' },
      {
        title: 'operation',
        dataIndex: 'operate',
        render: record => <a onClick={() => history.push(`/topics/${record._id}`)}>View</a>,
      },
    ];
    const tableProps = {
      dataSource: topics.topics,
      columns,
      pagination: false,
    };

    return (
      <PageHeaderWrapper>
        <Card>
          <Input.Search enterButton="Search" onSearch={this.onSearch.bind(this)} />
        </Card>
        <Card>
          <Table {...tableProps} />
        </Card>
      </PageHeaderWrapper>
    );
  }
}
