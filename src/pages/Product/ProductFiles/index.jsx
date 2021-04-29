import GGEditor from 'gg-editor';
import { PageContainer } from '@ant-design/pro-layout';
import React from 'react';
// import { formatMessage } from 'umi';
import IntroduceRow from './components/IntroduceRow';
import { GridContent } from '@ant-design/pro-layout';
import { connect } from 'umi';

GGEditor.setTrackable(false);
const ProductFiles = ({ loading, dashboardAndanalysis }) => {
  const { visitData } = dashboardAndanalysis;
  return (
    <PageContainer
    // content={formatMessage({
    //   id: '',
    //   defaultMessage: '',
    // })}
    >
      <GridContent>
        <IntroduceRow loading={loading} visitData={visitData} />
      </GridContent>
    </PageContainer>
  );
};

export default connect(({ dashboardAndanalysis, loading }) => ({
  dashboardAndanalysis,
  loading: loading.effects['dashboardAndanalysis/fetch'],
}))(ProductFiles);
