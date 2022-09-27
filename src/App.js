import React, { Component } from 'react';
import './app.scss';
import './carbon-override.scss';
import { Content, Theme } from '@carbon/react';
import TutorialHeader from './components/TutorialHeader';
import { Route, BrowserRouter, Switch, Routes } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
// import { Outlet } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Theme theme="g10">
            <TutorialHeader />
          </Theme>

          <Content>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/repos" element={<RepoPage />} />
            </Routes>
            {/* <Outlet /> */}
          </Content>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
