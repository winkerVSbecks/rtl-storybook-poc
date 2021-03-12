import React, { useState, useLayoutEffect } from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Page } from './Page';

export default {
  title: 'Example/Page',
  component: Page,
};
export const UserCanLogIn = () => {
  const [user, setUser] = useState(null);

  useLayoutEffect(() => {
    userEvent.click(screen.getByText('Log in'));
  }, []);

  return (
    <Page
      user={user}
      onLogin={() => {
        setUser({ user: { name: 'Foo' } });
      }}
    />
  );
};

export const UserCanLogOut = () => {
  const [user, setUser] = useState({ name: 'Foo' });

  useLayoutEffect(() => {
    userEvent.click(screen.getByText('Log out'));
  }, []);

  return (
    <Page
      user={user}
      onLogout={() => {
        setUser(null);
      }}
    />
  );
};
