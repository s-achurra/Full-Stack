import React from 'react';


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
            <h1>Where will MeetUp today?</h1>
          </div>
        </section>
        
        <section className="categoriesMain">
          <h1>Categories</h1>
            <section className="categoryIconsMain">
              <ul className="categoryIconsList">
                <li>
                  <div className="placeholderCategory"></div>
                  <h4>category</h4>
                </li>
                <li>
                  <div className="placeholderCategory"></div>
                  <h4>category</h4>
                </li>
                <li>
                  <div className="placeholderCategory"></div>
                  <h4>category</h4>
                </li>
                <li>
                  <div className="placeholderCategory"></div>
                  <h4>category</h4>
                </li>
                <li>
                  <div className="placeholderCategory"></div>
                  <h4>category</h4>
                </li>
                <li>
                  <div className="placeholderCategory"></div>
                  <h4>category</h4>
                </li>
                <li>
                  <div className="placeholderCategory"></div>
                  <h4>category</h4>
                </li>
                <li>
                  <div className="placeholderCategory"></div>
                  <h4>category</h4>
                </li>
                <li>
                  <div className="placeholderCategory"></div>
                  <h4>category</h4>
                </li>
                <li>
                  <div className="placeholderCategory"></div>
                  <h4>category</h4>
                </li>
                <li>
                  <div className="placeholderCategory"></div>
                  <h4>category</h4>
                </li>
                <li>
                  <div className="placeholderCategory"></div>
                  <h4>category</h4>
                </li>
              </ul>
            </section>
        </section>
      </div>
    );
  }

}

export default Home;
