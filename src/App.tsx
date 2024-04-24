import React from 'react';
import WelcomePage from './pages/WelcomePage';

import './styles/App.scss';
import IsaiahLogo from './components/IsaiahLogo';

function App() {
  return (
    <div className="App">
      <IsaiahLogo></IsaiahLogo>
      <WelcomePage />
    </div>
  );
}

export default App;
