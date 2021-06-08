import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={80}
          text="Javascript"
        />
        <ProgressBar
          percent={60}
          text="ReactJS"
        />
        <ProgressBar
          percent={90}
          text="C#"
        />
        <ProgressBar
          percent={80}
          text="Python"
        />
        <ProgressBar
          percent={80}
          text="Agile"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={70}
          text="Kotlin"
        />
        <ProgressBar
          percent={80}
          text="MSSQL"
        />
        <ProgressBar
          percent={80}
          text="Entity Framework"
        />
        <ProgressBar
          percent={70}
          text="REST API"
        />
        <ProgressBar
          percent={80}
          text="Azure"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
