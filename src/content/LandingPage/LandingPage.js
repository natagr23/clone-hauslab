import React from 'react';

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

import { Globe, LogoLinkedin, LogoGithub, Email } from '@carbon/react/icons';
import { InfoSection, InfoCard } from '../../components/Info';
import profileImg from '../../Data/foto.JPG';

const LandingPage = () => {
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
                      <LogoLinkedin size={30} />
                    </Button>
                  </Link>
                  <hr />
                  <Link href={'https://github.com/natagr23'}>
                    <Button>
                      <LogoGithub size={30} />
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
                      <Email size={30} />
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
                  lg={16}
                  md={8}
                  sm={4}
                  className="landing-page__tab-content"
                ></Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  lg={16}
                  md={8}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  Carbon provides styles and components in Vanilla, React,
                  Angular, and Vue for anyone building on the web.
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  lg={16}
                  md={8}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  Carbon2222 provides styles and components in Vanilla, React,
                  Angular, and Vue for anyone building on the web.
                </Column>
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r3">
        <InfoSection heading="Connect with me" className="landing-page__r3">
          <InfoCard
            heading="LinkedIn"
            body="It's a distributed effort, guided by the principles of the open-source movement. Carbon's users are also it's makers, and everyone is encouraged to contribute."
            icon={() => <LogoLinkedin size={32} />}
          />
          <InfoCard
            heading="Github"
            body="Carbon's modularity ensures maximum flexibility in execution. It's components are designed to work seamlessly with each other, in whichever combination suits the needs of the user."
            icon={() => <LogoGithub size={32} />}
          />
          <InfoCard
            heading="Email"
            body="Based on the comprehensive IBM Design Language, every element and component of Carbon was designed from the ground up to work elegantly together to ensure consistent, cohesive user experiences."
            icon={() => <Email size={32} />}
          />
        </InfoSection>
      </Column>
    </Grid>
  );
};

export default LandingPage;
