import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import {
  Breadcrumb,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  Column,
  Link,
} from '@carbon/react';

import { LogoLinkedin, LogoGithub, Email } from '@carbon/react/icons';
import { InfoSection, InfoCard } from '../../components/Info';
import profileImg from '../../Data/foto.JPG';
import crudAppImg1 from '../../Data/crud1.jpg';
import crudAppImg2 from '../../Data/crud2.jpg';
import crudAppImg3 from '../../Data/crud3.jpg';
import crudAppImg4 from '../../Data/crud4.jpg';
import crudAppImg5 from '../../Data/crud5.jpg';
import crudAppImg6 from '../../Data/crud6.jpg';
import crudAppImg7 from '../../Data/crud7.jpg';
import catalogueImg1 from '../../Data/catalogue1.JPG';
import catalogueImg2 from '../../Data/catalogue2.JPG';
import catalogueImg3 from '../../Data/catalogue3.JPG';
import timeline1 from '../../Data/timeline1.jpg';
import timeline2 from '../../Data/timeline2.jpg';
import d3graph from '../../Data/d3.JPG';

const LandingPage = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <Breadcrumb noTrailingSlash aria-label="Page navigation"></Breadcrumb>
        <h5 className="landing-page__heading">
          {/* Design &amp; build with Carbon */}
          Portfolio
        </h5>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Tabs defaultSelectedIndex={0}>
          <TabList className="tabs-group" aria-label="Tab navigation">
            <Tab>About</Tab>
            <Tab>Timeline Next.js</Tab>
             <Tab>CRUD Google firebase App</Tab>
            <Tab>Photo Catalogue </Tab>
            <Tab>Weather Charts</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  md={4}
                  lg={7}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  <h2 className="landing-page__subheading">Experience</h2>
                  <p className="landing-page__p2">
                    I am an engineer passionate about web programming and
                    constantly learning new technologies. Coding on front-end
                    technologies such as Vue.js, React.js, Bootstrap,
                    Material-UI. Backend: AWS Amplify, Cognito, IAM and
                    DynamoDB. Skills: Django, GIT, Docker, Scrum, Microsoft
                    Azure. During my master's studies I used meteorological data
                    to evaluate a hydrological model using R.
                  </p>
                  <hr />
                  <Link
                    href={'https://www.linkedin.com/in/nataliagarciarosas/'}
                  >
                    <Button>
                      {' '}
                      <LogoLinkedin size={20} />
                    </Button>
                  </Link>
                  <hr />
                  <Link href={'https://github.com/natagr23'}>
                    <Button>
                      <LogoGithub size={20} />
                      {/* Github Profile */}
                    </Button>
                  </Link>
                  <hr />
                  <Link
                    href={
                      'mailto:nata_garcia23@hotmail.com?body=My custom mail body'
                    }
                  >
                    <Button>
                      <Email size={20} />
                      Contact me
                    </Button>
                  </Link>
                  <hr />
                </Column>
                <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
                  <img
                    className="landing-page__illo"
                    src={profileImg}
                    alt="Carbon illustration"
                  />
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={3000}
              >
                <div>
                  <img
                    className="landing-page__crud"
                    src={timeline1}
                    alt="Carbon illustration"
                  />
                </div>

                <div>
                  <img
                    className="landing-page__crud"
                    src={timeline2}
                    alt="Carbon illustration"
                  />
                </div>
                
                <Button>
                  <Link href={'https://github.com/natagr23/timeline-nextjs'}>
                    <LogoGithub size={50} />
                    {/* Github Profile */}
                  </Link>
                </Button>
              </AutoplaySlider>
              <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
                <h3> &nbsp; </h3>
                <h3> &nbsp;</h3>
              </Column>
            </TabPanel>
            <TabPanel>
              <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={3000}
              >
                <div>
                  <img
                    className="landing-page__crud"
                    src={crudAppImg1}
                    alt="Carbon illustration"
                  />
                </div>

                <div>
                  <img
                    className="landing-page__crud"
                    src={crudAppImg2}
                    alt="Carbon illustration"
                  />
                </div>
                <div>
                  <img
                    className="landing-page__crud"
                    src={crudAppImg3}
                    alt="Carbon illustration"
                  />
                </div>

                <div>
                  <img
                    className="landing-page__crud"
                    src={crudAppImg4}
                    alt="Carbon illustration"
                  />
                </div>
                <div>
                  <img
                    className="landing-page__crud"
                    src={crudAppImg5}
                    alt="Carbon illustration"
                  />
                </div>
                <div>
                  <img
                    className="landing-page__crud"
                    src={crudAppImg6}
                    alt="Carbon illustration"
                  />
                </div>
                <div>
                  <img
                    className="landing-page__crud"
                    src={crudAppImg7}
                    alt="Carbon illustration"
                  />
                </div>
                <Button>
                  <Link href={'https://github.com/natagr23/Agro_App'}>
                    <LogoGithub size={50} />
                    {/* Github Profile */}
                  </Link>
                </Button>
              </AutoplaySlider>
              <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
                <h3> &nbsp; </h3>
                <h3> &nbsp;</h3>
              </Column>
            </TabPanel>
            <TabPanel>
              <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={3000}
              >
                <div>
                  <img
                    className="landing-page__crud"
                    src={catalogueImg1}
                    alt="Carbon illustration"
                  />
                </div>
                <div>
                  <img
                    className="landing-page__crud"
                    src={catalogueImg2}
                    alt="Carbon illustration"
                  />
                </div>
                <div>
                  <img
                    className="landing-page__crud"
                    src={catalogueImg3}
                    alt="Carbon illustration"
                  />
                </div>
                <Button>
                  <Link href={'https://github.com/natagr23/old-photos'}>
                    <LogoGithub size={50} />
                    {/* Github Profile */}
                  </Link>
                </Button>
              </AutoplaySlider>
              <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
                <h3> &nbsp; </h3>
                <h3> &nbsp;</h3>
              </Column>
            </TabPanel>
            <TabPanel>
              <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={3000}
              >
                <div>
                  <img
                    className="landing-page__crud"
                    src={d3graph}
                    alt="Carbon illustration"
                  />
                </div>
                <Button>
                  <Link href={'https://github.com/natagr23/weather-statistics'}>
                    <LogoGithub size={50} />
                    {/* Github Profile */}
                  </Link>
                </Button>
              </AutoplaySlider>
              <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
                <h3> &nbsp; </h3>
                <h3> &nbsp;</h3>
              </Column>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r3">
        <InfoSection
          heading="Tools and Contact Information                         "
          className="landing-page__r3"
        >
          <InfoCard
            heading="Tools"
            icon={() => (
              <img
                src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white"
                alt="Carbon2 illustration"
              />
            )}
            body={
              <img
                src="https://badges.aleen42.com/src/react.svg"
                alt="Carbon2 illustration"
              />
            }
          />

          <InfoCard
            heading="LinkedIn"
            icon={() => (
              <Link href={'https://www.linkedin.com/in/nataliagarciarosas/'}>
                <LogoLinkedin size={32} />
              </Link>
            )}
          />
          <InfoCard
            heading="Github"
            icon={() => (
              <Link href={'https://github.com/natagr23'}>
                <LogoGithub size={32} />
              </Link>
            )}
          />
          <InfoCard
            heading="Email"
            icon={() => (
              <Link
                href={
                  'mailto:nata_garcia23@hotmail.com?body=My custom mail body'
                }
              >
                {' '}
                <Email size={32} />
              </Link>
            )}
          />
        </InfoSection>
      </Column>
    </Grid>
  );
};

export default LandingPage;
