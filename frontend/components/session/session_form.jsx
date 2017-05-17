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
      <section className="auth">
        <section className="form">
          <header>
            <h1>{this.props.formType === "login" ? "Log In" : "Sign Up"}</h1>
            <span>
              {this.props.formType === "login" ?
              "Not yet Registered? "
              : "Already Registered? "}
            </span>
            <Link to={`/${otherForm}`} >
            {this.props.formType === "login" ?
            "Sign Up" : "Log In"}
            </Link>

          </header>




          <form onSubmit={this.handleSubmit}>
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
            <button>Submit</button>
            {errors}
          </form>
        </section>
      </section>
    );

  }
}

export default withRouter(SessionForm);
