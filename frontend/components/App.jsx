import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import HomeContainer from './home/home_container';
import GroupContainer from './group/group_container';
import FooterContainer from './footer/footer_container';
import LogoContainer from './logo/logo_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <nav>
      <GroupContainer />
      <LogoContainer />
      <GreetingContainer />
    </nav>

    <Route exact path='/' component={HomeContainer} />
    <AuthRoute path='/login' component={SessionFormContainer} />
    <AuthRoute path='/signup' component={SessionFormContainer} />

    <FooterContainer />
  </div>
);

export default App;
