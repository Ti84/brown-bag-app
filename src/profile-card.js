import React from 'react';

// ./ indicates local file vs node_modules
import './profile-card.css';

// import svg as modules so we can use them in our jsx.
// In webpack or other bundlers you can import images like a module and it will recognize that and deploy it for you.
import Codepen from './assets/codepen.svg';
import Twitter from './assets/twitter.svg';
import Github from './assets/github.svg';

// Destructure props object (normaly might to function (props) and have to do props.name, etc. instead of just name so we destructure it here to just make it easier on ourselves)
const ProfileCard = ({ profileImg, name, twitter, github, codepen }) => {

  // Have to have 1 containing element, can use Fragment if you don't want a container or div.
  // Use className in jsx instead of class because of conflicting js keywords.

  // {} means you can inject some Javascript into your jsx
  // Short circuiting: https://codeburst.io/javascript-what-is-short-circuit-evaluation-ff22b2f5608c

  return (
    <section className="profile-card">
      <img className="profile-card__img" src={profileImg} alt={`${name}`}/>
      <h1 className="profile-card__title">{name}</h1>
      <ul className="profile-card__links">
        { twitter && <li>
          <a href={twitter} rel="noopener noreferrer" target="_blank">
            <img src={Twitter} alt="twitter"></img>
          </a>
        </li> }
        { github && <li>
          <a href={github} rel="noopener noreferrer" target="_blank">
            <img src={Github} alt="github"></img>
          </a>
        </li> }
        { codepen && <li>
          <a href={codepen} rel="noopener noreferrer" target="_blank">
            <img src={Codepen} alt="github"></img>
          </a>
        </li> }
      </ul>
    </section>
  );

}

export default ProfileCard;