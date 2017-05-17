import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import GroupContainer from './group/group_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <nav>
      <GroupContainer />
      <img id="logoScript" alt="Meetup home" src="https://secure.meetupstatic.com/s/img/041003812446967856280/logo/svg/logo--script.svg"/>
      <GreetingContainer />
    </nav>

    <AuthRoute path='/login' component={SessionFormContainer} />
    <AuthRoute path='/signup' component={SessionFormContainer} />
  </div>
);

export default App;
