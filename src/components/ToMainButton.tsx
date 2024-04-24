import React from 'react';
import { Link } from 'react-router-dom';

const ToMainButton = () => 
<Link to={`main`}>
  <button className="link-button">
    <div id='link-button-text'> Let's get started </div>
  </button>
</Link>

export default ToMainButton;