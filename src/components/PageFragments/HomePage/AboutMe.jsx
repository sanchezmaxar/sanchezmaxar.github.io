import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Hi 😁. My name is Max Sanchez. I am a software developer passionate for new technologies. Mostly my 
  experience is in NET ecosystem but lately I have found JS environment really attractive.`,
  paraTwo: `Nowadays, I've been working with <b>NET Core</b> for the backend also in side projects to explore
   new technologies like <b>Kotlin</b>, <b>React</b>, <b>Nextjs</b>, <b>Odata</b>, <b>GraphQL</b>, etc. Furthermore, I have some experiments 
   using <b>Python</b>, <b>Tensorflow</b>,and <b>Keras</b>. I consider my self taught learner.`,
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Max', 'Sanchez', 'Software developer', 'NET', 'Core', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby', 'Python']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Born in"
            textH3="MXC, Mexico"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="pets.png"
            alt="pets image"
            height={60}
            width={102}
            textH4="Pets owner"
            textH3="4🐕 + 5😸 = 💗"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="Interested on"
            textH3="Knowing more perspectives"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="plane.png"
            alt="plane image"
            textH4="Traveller"
            textH3="Love to know new places"
            height={33}
            width={100}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued Major in"
            textH3="Computer Engineering"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
