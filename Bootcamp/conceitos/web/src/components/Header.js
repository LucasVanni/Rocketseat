import React from 'react';

import iconImage from '../assets/listIcon.png';

export default ({title, children}) => {
  return (
    <header>
      <div>
        <img width={50} src={iconImage}></img>
        <div id="title">
          <h1>{title}</h1>
        </div>
      </div>
      
      {children}
    </header>
  );
}