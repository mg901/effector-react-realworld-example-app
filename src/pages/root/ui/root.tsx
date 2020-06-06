import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { RootGate } from '../model';
import '../init';

export const RootPage: React.FC = ({ route }) => (
  <>
    <RootGate />
    <header>
      <Link to="/">Home</Link>

      <nav>
        <Link to="/login">Sign In</Link>
        <Link to="/registration">Sign Up</Link>
      </nav>
    </header>
    <>{renderRoutes(route.routes)}</>
  </>
);
