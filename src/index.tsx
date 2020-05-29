import React from 'react';
import { render } from 'react-dom';
import { App } from './app';

import 'normalize.css';
import './ui/init/global.css';
import './ui/init/layout.css';
import './ui/init/typography.css';

import './router/init';
import './auth/init';
import './root/init';

render(<App />, document.getElementById('root'));
