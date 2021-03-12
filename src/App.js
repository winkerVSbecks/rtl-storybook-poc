import { useState } from 'react';
import { Page } from './Page';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Page
      user={user}
      onLogin={() => {
        setUser({ user: { name: 'Foo' } });
      }}
      onLogout={() => {
        setUser(null);
      }}
    />
  );
}

export default App;
