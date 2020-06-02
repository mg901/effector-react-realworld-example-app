import React from 'react';
import { render } from 'react-dom';
import { App } from './app';

import 'normalize.css';
import './auth/init';

render(<App />, document.getElementById('root'));
