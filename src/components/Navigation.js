import React from 'react';

import home from '../images/header/home.png';
import t from '../images/header/t.png';
import j from '../images/header/j.png';
import h from '../images/header/h.png';

const Navigation = ({ handleClickTeam }) => {
  const clickTeam = (e) => {
    console.log(`clicked Team`);
    console.log(e);
    console.log(`e.target.name: ${e.target.name}`);
    handleClickTeam(e.target.name);
  };

  return (
    <div className="navigation">
      <ul className="navigation__list">
        <li>
          <button onClick={clickTeam} name="All">All</button>
        </li>
        <li>
          <button onClick={clickTeam} name="Tum">Tum</button>
        </li>
        <li>
          <button onClick={clickTeam} name="Joj">Joj</button>
        </li>
        <li>
          <button onClick={clickTeam} name="Herb">Herb</button>
        </li>
      </ul>    
    </div>
  );
};

export default Navigation;