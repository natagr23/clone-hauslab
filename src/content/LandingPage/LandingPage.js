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

const LandingPage = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const data = [
    {
      id: '1',
      icon: 'asset/mobile.png',
      title: 'Web Design',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      img: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930',
    },
    {
      id: '2',
      icon: 'asset/globe.png',
      title: 'Mobile Application',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img: 'https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg',
    },
    {
      id: '3',
      icon: 'asset/writing.png',
      title: 'Branding',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img: 'https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg',
    },
  ];
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <Breadcrumb noTrailingSlash aria-label="Page navigation"></Breadcrumb>
        <h5 className="landing-page__heading">
          {/* Design &amp; build with Carbon */}
          Portafolio
        </h5>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Tabs defaultSelectedIndex={0}>
          <TabList className="tabs-group" aria-label="Tab navigation">
            <Tab>About</Tab>
            <Tab>Photo catalogue</Tab>
            <Tab>Agro products</Tab>
            <Tab>Clone App</Tab>
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
                    I have knowledge in web development (React.js, Javascript,
                    HTML5, CSS, Carbon Design, MUI,Bootstrap, Tailwind,
                    Firebase). During my master's studies I used meteorological
                    data to evaluate a hydrological model using R.
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
                interval={6000}
              >
                <div>
                  <img
                    className="landing-page__illo"
                    src={profileImg}
                    alt="Carbon illustration"
                  />
                </div>
                <div data-src="/twitter-green.png">2</div>
                <div data-src="/unsplash.png">3</div>

                <div>4</div>
              </AutoplaySlider>
              <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
                <h3> &nbsp; </h3>
                <h3> &nbsp;</h3>
              </Column>
            </TabPanel>
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
                    I have knowledge in web development (React.js, Javascript,
                    HTML5, CSS, Carbon Design, MUI,Bootstrap, Tailwind,
                    Firebase). During my master's studies I used meteorological
                    data to evaluate a hydrological model using R.
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
              <Grid className="tabs-group-content">
                <Column
                  md={4}
                  lg={7}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  <h2 className="landing-page__subheading">Experience</h2>
                  <p className="landing-page__p2">
                    I have knowledge in web development (React.js, Javascript,
                    HTML5, CSS, Carbon Design, MUI,Bootstrap, Tailwind,
                    Firebase). During my master's studies I used meteorological
                    data to evaluate a hydrological model using R.
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
