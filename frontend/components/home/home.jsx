import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  categories() {

      <ul>
        <li class="gridList-item">
          <a class="categoryLink" href="https://www.meetup.com/find/outdoors-adventure/">

            <div class="categoryImg keepAspect" style="background-image: url(https://secure.meetupstatic.com/photos/event/2/e/a/7/event_450131943.jpeg);"></div>
            <h4 class="text--heavy">Outdoors &amp; Adventure</h4>
          </a>
        </li>
      </ul>

  }


  render() {
    return(
      <div>
        <section className="banner">
          <div className="bannerText">
            <h1>Where will you MeetUp?</h1>
            <h2>Join Groups. Create Events. Meetup!</h2>
          </div>
        </section>

        <section className="categoriesMain">
          <h1>Categories</h1>
            <section className="categoryIconsMain">
              <ul className="categoryIconsList">
                <li>
                  <Link to="/groups/outdoors">
                    <section className="homeCategory Outdoors"></section>
                    <h4>Outdoors</h4>
                  </Link>
                </li>
                <li>
                  <section className="homeCategory Tech"></section>
                  <h4>Tech</h4>
                </li>
                <li>
                  <section className="homeCategory Health"></section>
                  <h4>Health</h4>
                </li>
                <li>
                  <section className="homeCategory Learning"></section>
                  <h4>Learning</h4>
                </li>
                <li>
                  <section className="homeCategory Food"></section>
                  <h4>Food</h4>
                </li>
                <li>
                  <section className="homeCategory Writing"></section>
                  <h4>Writing</h4>
                </li>
                <li>
                  <section className="homeCategory Language"></section>
                  <h4>Language</h4>
                </li>
                <li>
                  <section className="homeCategory Family"></section>
                  <h4>Family</h4>
                </li>
              </ul>
            </section>
        </section>
        <section className="linkToGroups">
        </section>

      </div>
    );
  }

}

export default Home;
