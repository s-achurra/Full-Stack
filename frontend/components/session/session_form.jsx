import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(property) {
    return (e => this.setState({[property]: e.target.value}));
  }

  guestLogin (e) {
    this.state.username = "Guest";
    this.state.password = "password";
    setTimeout( this.handleSubmit(e), 2000 );
  }

  render() {
    const otherForm = (this.props.formType === "login") ? 'signup' : 'login';
    let errors;
    if (this.props.errors) {
      errors = this.props.errors.map( (error, idx) => <p key={idx}>{error}</p>);
    }

    const switchText = this.props.formType === "login" ?
    "Don't Yet Have an Account? "
    : "Already Registered? ";

    const switchLink = this.props.formType === "login" ? "Sign Up" : "Log In";


    let guestButton;
    guestButton = (
    <button className="button" onClick={this.guestLogin}>Guest</button>
    );

    return (
      <section className="auth">
        <section className="form sessionForm">

          <header>
            <h1>{this.props.formType === "login" ? "Log In" : "Sign Up"}</h1>
            <span>
                {switchText}
            </span>
            <Link to={`/${otherForm}`} >
              {switchLink}
            </Link>
          </header>

          <form>
            <div>
              <p>
                User Name:
              </p>
              <input type="text" value={this.state.username} onChange={this.update('username')} />
            </div>
            <div>
              <p>
                Password:
              </p>
              <input type='password' value={this.state.password} onChange={this.update('password')} />
            </div>
            <section className="formButtons">
              <button className="button"  onClick={this.handleSubmit}>Submit</button>
              {this.props.formType === "login" ? guestButton : ""}
            </section>
            {errors}
          </form>
        </section>
      </section>
    );

  }
}

export default withRouter(SessionForm);
