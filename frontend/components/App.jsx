import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import HomeContainer from './home/home_container';
import GroupCreateContainer from './group/group_create_container';
import FooterContainer from './footer/footer_container';
import LogoContainer from './logo/logo_container';
import { Link, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <nav>
      <section className="navLeft">
        <Link to="/group/new" className="navText">Make Group</Link>
      </section>
      <LogoContainer />
      <GreetingContainer />
    </nav>

    <Route path='/group/new' component={GroupCreateContainer} />
    <Route exact path='/' component={HomeContainer} />
    <AuthRoute path='/login' component={SessionFormContainer} />
    <AuthRoute path='/signup' component={SessionFormContainer} />

    <FooterContainer />
  </div>
);

export default App;
