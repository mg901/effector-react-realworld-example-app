import React from 'react';
import { render } from 'react-dom';
import './ui/init/global.css';
import './ui/init/typography.css';
import './ui/init/layout.css';

import { App } from './app';
import './auth/init';

render(<App />, document.getElementById('root'));
