import React from 'react';
import { useStore } from 'effector-react';
import { Link } from 'react-router-dom';
import { StickyContainer, Sticky } from 'react-sticky';

import { $token } from '../auth/model';
import { LoggedIn } from './logged-in';
import { LoggedOut } from './logged-out';
import { APP_NAME } from '../constants';
import './index.css';

export const Header = () => {
  const token = useStore($token);

  return (
    <StickyContainer>
      <Sticky topOffset={60}>
        {() => (
          <header className="header">
            <div className="container header-inner">
              {!token && (
                <Link to="/" className="link logo header-logo">
                  {APP_NAME.toLowerCase()}
                </Link>
              )}

              <nav className="header-nav">
                {token ? <LoggedIn /> : <LoggedOut />}
              </nav>
            </div>
          </header>
        )}
      </Sticky>
    </StickyContainer>
  );
};
