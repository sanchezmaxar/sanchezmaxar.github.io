import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import SEO from '../../components/Seo';

const Contact = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="Contact"
        description="This section is to give propers thanks and credit to all content creators which work I have taken to beauty this page."
        path="/contact"
        keywords={['credits']}
      />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Credits</h1>
        </div>
        <Row gutter={[40, 20]}>
          <Col sm={24} md={24} lg={12}>
            <p>Thanks all graphs and sources I have been taking to beauty this website🙏</p>
            <a href="https://www.freepik.com/vectors/dog">Dog vector created by stockgiu - www.freepik.com</a>
            <a href="https://www.freepik.com/vectors/background">Background vector created by brgfx - www.freepik.com</a>
          </Col>
        </Row>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default Contact;
