import React from 'react';
import GreetingContainer from './nav/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>App Hello</h1>
      <GreetingContainer />
    </header>

    <AuthRoute path='/login' component={SessionFormContainer} />
    <AuthRoute path='/signup' component={SessionFormContainer} />
  </div>
);

export default App;
