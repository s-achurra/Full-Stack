import React from 'react';

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import HomeContainer from './home/home_container';
import FooterContainer from './footer/footer_container';
import LogoContainer from './logo/logo_container';

import GroupCreateContainer from './group/group_create_container';
import GroupIndexContainer from './group/group_index_container';
import GroupDetailContainer from './group/group_detail_container';
import GroupEditContainer from './group/group_edit_container';

import EventCreateContainer from './event/event_create_container';
import EventIndexContainer from './event/event_index_container';
import EventDetailContainer from './event/event_detail_container';
import EventEditContainer from './event/event_edit_container';

import SearchContainer from  './search/search_container';

import { Link, Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <nav>
      <section className="navLeft">
        <section className="navLeftLinks">
          <Link to="/group/new" className="navText">Make New Groups</Link>
          <Link className="exploreGroupsLink" to="/groups">Explore All Groups</Link>
        </section>
        <SearchContainer />
      </section>
      <LogoContainer />
      <GreetingContainer />
    </nav>

    <Switch>
      <Route exact path='/' component={HomeContainer} />

      <ProtectedRoute path="/group/new" component={GroupCreateContainer} />
      <Route exact path='/groups' component={GroupIndexContainer} />
      <Route exact path='/groups/:category' component={GroupIndexContainer} />
      <Route exact path='/group/:id' component={GroupDetailContainer} />
      <Route exact path='/group/edit/:id' component={GroupEditContainer} />


      <ProtectedRoute exact path='/event/new' component={EventCreateContainer} />
      <Route exact path='/events' component={EventIndexContainer} />
      <Route exact path='/event/:id' component={EventDetailContainer} />
      <Route exact path='/event/edit/:id' component={EventEditContainer} />


      <AuthRoute path='/login' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
    </Switch>
    <FooterContainer />
  </div>
);

export default App;
