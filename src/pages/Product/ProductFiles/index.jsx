import GGEditor from 'gg-editor';
import { PageContainer } from '@ant-design/pro-layout';
import React, { useEffect, useState } from 'react';
// import { formatMessage } from 'umi';
import IntroduceRow from './components/IntroduceRow';
import { GridContent } from '@ant-design/pro-layout';
import { connect } from 'umi';
import SalesCard from './components/SalesCard';
import { getTimeDistance } from './utils/utils';
import styles from './style.less';
import OfflineData from './components/OfflineData';

GGEditor.setTrackable(false);
const ProductFiles = ({ loading, dashboardAndanalysis, dispatch }) => {
  const { visitData } = dashboardAndanalysis;
  const { salesData, offlineData, offlineChartData } = dashboardAndanalysis;
  const [rangePickerValue, setRangePickerValue] = useState(getTimeDistance('year'));

  const [currentTabKey, setCurrentTabKey] = useState('');
  const handleRangePickerChange = (r) => {
    setRangePickerValue(r);
    dispatch({
      type: 'dashboardAndanalysis/fetchSalesData',
    });
  };

  const isActive = (type) => {
    if (!rangePickerValue) {
      return '';
    }

    const value = getTimeDistance(type);

    if (!value) {
      return '';
    }

    if (!rangePickerValue[0] || !rangePickerValue[1]) {
      return '';
    }

    if (
      rangePickerValue[0].isSame(value[0], 'day') &&
      rangePickerValue[1].isSame(value[1], 'day')
    ) {
      return styles.currentDate;
    }

    return '';
  };

  const selectDate = (type) => {
    setRangePickerValue(getTimeDistance(type));
    dispatch({
      type: 'dashboardAndanalysis/fetchSalesData',
    });
  };

  const activeKey = currentTabKey || (offlineData[0] && offlineData[0].name);

  const handleTabChange = (key) => {
    setCurrentTabKey(key);
  };

  useEffect(() => {
    requestAnimationFrame(() => {
      dispatch({
        type: 'dashboardAndanalysis/fetch',
      });
    });
  }, []);
  return (
    <PageContainer
    // content={formatMessage({
    //   id: '',
    //   defaultMessage: '',
    // })}
    >
      <GridContent>
        <IntroduceRow loading={loading} visitData={visitData} />
        <SalesCard
          rangePickerValue={rangePickerValue}
          salesData={salesData}
          isActive={isActive}
          handleRangePickerChange={handleRangePickerChange}
          loading={loading}
          selectDate={selectDate}
        />
        <OfflineData
          activeKey={activeKey}
          loading={loading}
          offlineData={offlineData}
          offlineChartData={offlineChartData}
          handleTabChange={handleTabChange}
        />
      </GridContent>
    </PageContainer>
  );
};

export default connect(({ dashboardAndanalysis, loading }) => ({
  dashboardAndanalysis,
  loading: loading.effects['dashboardAndanalysis/fetch'],
}))(ProductFiles);
