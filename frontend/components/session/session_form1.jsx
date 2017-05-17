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

  render() {
    const otherForm = (this.props.formType === "login") ? 'signup' : 'login';
    let errors;
    if (this.props.errors) {
      errors = this.props.errors.map( (error, idx) => <p key={idx}>{error}</p>);
    }

    return (
      <div className="wrapper">
        <form className="form-signin">
          <h2 className="form-signin-heading">{this.props.formType === "login" ? "Please Log In" : "Please Sign Up"}</h2>
          <input type="text" className="form-control" name="username" placeholder="Username" required="" autoFocus="" value={this.state.username} onChange={this.update('username')}/>
          <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.update('password')} required=""/>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
        </form>
      </div>
    );

  }
}

export default withRouter(SessionForm);
