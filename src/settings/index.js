import React, { useReducer } from 'react';
import { useStore } from 'effector-react';
import { connect } from 'react-redux';
import { ListErrors } from '../components/list-errors';
import { InputFiled } from '../components/input-field';
import { SubmitBtn } from '../components/submit-btn';
import * as agent from '../agent';
import {
  SETTINGS_SAVED,
  SETTINGS_PAGE_UNLOADED,
  LOGOUT,
} from '../constants/actionTypes';
import { asyncUpdateUserData } from './store';
import { logOut } from '../auth/user.model';

const mergeState = (state, payload) => ({ ...state, ...payload });

const initialState = {
  image: '',
  username: '',
  bio: '',
  email: '',
  password: '',
};

const updateValue = (key) => (e) => ({ [key]: e.currentTarget.value });

const handleSubmit = (user) => (e) => {
  e.preventDefault();

  if (!user.password) {
    const { password, ...rest } = user;

    asyncUpdateUserData(rest);
  } else {
    asyncUpdateUserData(user);
  }
};

const Test = () => {
  const isLoading = useStore(asyncUpdateUserData.pending);
  const [state, setState] = useReducer(mergeState, initialState);

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <InputFiled
          placeholder="URL of profile picture"
          value={state.image}
          onChange={() => setState(updateValue('image'))}
        />

        <InputFiled
          placeholder="Username"
          value={state.username}
          onChange={() => setState(updateValue('username'))}
        />

        <fieldset className="form-group">
          <textarea
            className="form-control form-control-lg"
            rows="8"
            placeholder="Short bio about you"
            value={state.bio}
            onChange={() => setState(updateValue('bio'))}
          />
        </fieldset>

        <InputFiled
          type="email"
          placeholder="Email"
          value={state.email}
          onChange={() => setState(updateValue('email'))}
        />

        <InputFiled
          type="password"
          placeholder="New Password"
          value={state.password}
          onChange={() => setState(updateValue('password'))}
        />

        <SubmitBtn disabled={isLoading}>Update Settings</SubmitBtn>
      </fieldset>
    </form>
  );
};

class SettingsForm extends React.Component {
  state = {
    image: '',
    username: '',
    bio: '',
    email: '',
    password: '',
  };

  submitForm = (ev) => {
    ev.preventDefault();

    const user = Object.assign({}, this.state);
    if (!user.password) {
      delete user.password;
    }

    this.props.onSubmitForm(user);
  };

  updateState = (field) => (ev) => {
    const { state } = this;
    const newState = Object.assign({}, state, { [field]: ev.target.value });
    this.setState(newState);
  };

  componentWillMount() {
    if (this.props.currentUser) {
      Object.assign(this.state, {
        image: this.props.currentUser.image || '',
        username: this.props.currentUser.username,
        bio: this.props.currentUser.bio,
        email: this.props.currentUser.email,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser) {
      this.setState(
        Object.assign({}, this.state, {
          image: nextProps.currentUser.image || '',
          username: nextProps.currentUser.username,
          bio: nextProps.currentUser.bio,
          email: nextProps.currentUser.email,
        }),
      );
    }
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <fieldset>
          <InputFiled
            placeholder="URL of profile picture"
            value={this.state.image}
            onChange={this.updateState('image')}
          />

          <InputFiled
            placeholder="Username"
            value={this.state.username}
            onChange={this.updateState('username')}
          />

          <fieldset className="form-group">
            <textarea
              className="form-control form-control-lg"
              rows="8"
              placeholder="Short bio about you"
              value={this.state.bio}
              onChange={this.updateState('bio')}
            />
          </fieldset>

          <InputFiled
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.updateState('email')}
          />

          <InputFiled
            type="password"
            placeholder="New Password"
            value={this.state.password}
            onChange={this.updateState('password')}
          />

          <SubmitBtn disabled={this.state.inProgress}>
            Update Settings
          </SubmitBtn>
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.settings,
  currentUser: state.common.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  onClickLogout: () => dispatch({ type: LOGOUT }),
  onSubmitForm: (user) =>
    dispatch({ type: SETTINGS_SAVED, payload: agent.auth.save(user) }),
  onUnload: () => dispatch({ type: SETTINGS_PAGE_UNLOADED }),
});

class Settings extends React.Component {
  render() {
    return (
      <div className="settings-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Your Settings</h1>

              <ListErrors errors={this.props.errors} />

              <SettingsForm
                currentUser={this.props.currentUser}
                onSubmitForm={this.props.onSubmitForm}
              />

              <hr />

              <button
                className="btn btn-outline-danger"
                onClick={() => logOut()}>
                Or click here to logout.
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
