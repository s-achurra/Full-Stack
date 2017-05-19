import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import HomeContainer from './home/home_container';
import GroupCreateContainer from './group/group_create_container';
import GroupIndexContainer from './group/group_index_container';
import GroupDetailContainer from './group/group_detail_container';
import FooterContainer from './footer/footer_container';
import LogoContainer from './logo/logo_container';
import { Link, Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <nav>
      <section className="navLeft">
        <Link to="/group/new" className="navText">Make Groups</Link>
        <Link className="exploreGroupsLink" to="/groups">Explore Groups</Link>
      </section>
      <LogoContainer />
      <GreetingContainer />
    </nav>

    <Switch>
      <Route exact path='/group/new' component={GroupCreateContainer} />
      <Route exact path='/groups' component={GroupIndexContainer} />
      <Route exact path='/groups/:category' component={GroupIndexContainer} />
      <Route exact path='/' component={HomeContainer} />
      <Route exact path='/group/:id' component={GroupDetailContainer} />
      <AuthRoute path='/login' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
    </Switch>
    <FooterContainer />
  </div>
);

export default App;
