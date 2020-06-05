import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formSubmitted } from '../model';
import '../init';

export const RegistrationPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1 className="h1">Sign Up</h1>

      <p>
        <Link to="/login">Have an account?</Link>
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          formSubmitted({ username, email, password });
        }}>
        <div>
          <input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>

        <input
          type="password"
          name="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
