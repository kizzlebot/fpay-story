import React from 'react';
import { WithNotes } from '@kadira/storybook-addon-notes';

import { storiesOf, action } from '@kadira/storybook';
// import Button from '../index';
import Navibar from '../components/Navibar';
import LoginForm from '../components/LoginForm';

storiesOf('Navigation bar', module)
  .add('default view', () => {
    return (
      <WithNotes notes={'This is the default view for navigation bar'}>
        <Navibar onClick={action('button clicked')}>Hello</Navibar>
      </WithNotes>
    );
  })
  .add('A form', () => {
    return (
      <WithNotes notes={'This is the default view of login form'}>
        <LoginForm onClick={action('button clicked')}>Hello</LoginForm>
      </WithNotes>
    );
  });

