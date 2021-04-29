import { InfoCircleOutlined } from '@ant-design/icons';
import { Col, Row, Tooltip } from 'antd';
import { FormattedMessage } from 'umi';
import React from 'react';
import { ChartCard, Field } from './Charts';
import Trend from './Trend';
import styles from '../style.less';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 8,
  style: {
    marginBottom: 24,
  },
};

const IntroduceRow = ({ loading }) => (
  <Row gutter={24}>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title={<FormattedMessage id="1" defaultMessage="净值估算" />}
        action={
          <Tooltip title={<FormattedMessage id="2" defaultMessage="单位净值" />}>
            <InfoCircleOutlined />
          </Tooltip>
        }
        loading={loading}
        total={() => <div>+126560</div>}
        footer={
          <div>
            <p>
              基金类型：<a>联接基金</a>｜<span>高风险</span>
            </p>
            <p>
              <Field
                label={<FormattedMessage id="2" defaultMessage="成立日：" />}
                value={`2019-04-20`}
              />
            </p>

            <p>
              <a>跟踪标的：</a>
              <span>创业版指数(价格) | </span>
              <a>跟踪误差：</a>
              <span>0.11%</span>
            </p>
          </div>
        }
        contentHeight={46}
      >
        <Trend
          flag="up"
          style={{
            marginRight: 16,
          }}
        >
          <FormattedMessage
            id="dashboardandanalysis.analysis.week"
            defaultMessage="Weekly Changes"
          />
          <span className={styles.trendText}>12%</span>
        </Trend>
        <Trend flag="down">
          <FormattedMessage id="dashboardandanalysis.analysis.day" defaultMessage="Daily Changes" />
          <span className={styles.trendText}>11%</span>
        </Trend>
      </ChartCard>
    </Col>

    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title={<FormattedMessage id="1" defaultMessage="单位净值" />}
        action={
          <Tooltip title={<FormattedMessage id="2" defaultMessage="单位净值" />}>
            <InfoCircleOutlined />
          </Tooltip>
        }
        loading={loading}
        total={() => <div>-2.8042</div>}
        footer={
          <div>
            <p>
              基金类型：<a>联接基金</a>｜<span>高风险</span>
            </p>
            <p>
              <a>基金规模：</a>
              <span>51.83亿元(2020-12-31)</span>
            </p>
            <p>
              <span>管理人：</span>
              <a>易方达基金</a>
            </p>
          </div>
        }
        contentHeight={46}
      >
        <Trend
          flag="up"
          style={{
            marginRight: 16,
          }}
        >
          <FormattedMessage
            id="dashboardandanalysis.analysis.week"
            defaultMessage="Weekly Changes"
          />
          <span className={styles.trendText}>22%</span>
        </Trend>
        <Trend flag="down">
          <FormattedMessage id="dashboardandanalysis.analysis.day" defaultMessage="Daily Changes" />
          <span className={styles.trendText}>41%</span>
        </Trend>
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title={<FormattedMessage id="1" defaultMessage="累计净值" />}
        action={
          <Tooltip title={<FormattedMessage id="2" defaultMessage="单位净值" />}>
            <InfoCircleOutlined />
          </Tooltip>
        }
        loading={loading}
        total={() => <div>+126560</div>}
        footer={
          <div>
            <p>
              基金经理：<a>承熙</a>等
            </p>
            <p>
              <a>基金评级：</a>暂无评级
            </p>
          </div>
        }
        contentHeight={46}
      >
        <Trend
          flag="up"
          style={{
            marginRight: 16,
          }}
        >
          <FormattedMessage
            id="dashboardandanalysis.analysis.week"
            defaultMessage="Weekly Changes"
          />
          <span className={styles.trendText}>12%</span>
        </Trend>
        <Trend flag="down">
          <FormattedMessage id="dashboardandanalysis.analysis.day" defaultMessage="Daily Changes" />
          <span className={styles.trendText}>11%</span>
        </Trend>
      </ChartCard>
    </Col>
  </Row>
);

export default IntroduceRow;
