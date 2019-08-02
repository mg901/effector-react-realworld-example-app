import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { push } from 'react-router-redux';
import * as agent from '../agent';
import { Header } from '../components/Header';
import { APP_LOAD, REDIRECT } from '../constants/actionTypes';
import Article from '../components/Article';
import Editor from '../components/Editor';
import Home from '../home';
import { SignIn } from '../auth/sign-in';
import { SignUp } from '../auth/sign-up';
import { Profile } from '../components/Profile';
import ProfileFavorites from '../components/ProfileFavorites';
import Settings from '../settings';
import { store } from '../store';

const mapStateToProps = (state) => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () => dispatch({ type: REDIRECT }),
});

class App extends React.Component {
  componentWillMount() {
    const token = localStorage.getItem('jwt');
    if (token) {
      agent.setToken(token);
    }

    this.props.onLoad(token ? agent.auth.current() : null, token);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      // this.context.router.replace(nextProps.redirectTo);
      store.dispatch(push(nextProps.redirectTo));
      this.props.onRedirect();
    }
  }

  render() {
    if (this.props.appLoaded) {
      return (
        <div>
          <Header
            appName={this.props.appName}
            currentUser={this.props.currentUser}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={SignIn} />
            <Route path="/register" component={SignUp} />
            <Route path="/editor/:slug" component={Editor} />
            <Route path="/editor" component={Editor} />
            <Route path="/article/:id" component={Article} />
            <Route path="/settings" component={Settings} />
            <Route path="/@:username/favorites" component={ProfileFavorites} />
            <Route path="/@:username" component={Profile} />
          </Switch>
        </div>
      );
    }

    return (
      <Header
        appName={this.props.appName}
        currentUser={this.props.currentUser}
      />
    );
  }
}

// App.contextTypes = {
//   router: PropTypes.object.isRequired
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
