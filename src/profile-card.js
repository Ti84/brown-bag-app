import React from 'react';

// ./ indicates local file vs node_modules
import './profile-card.css';

// Destructure props object (normaly might to function (props) and have to do props.name, etc. instead of just name so we destructure it here to just make it easier on ourselves)
const ProfileCard = ({ profileImg, name, twitter, github, codepen }) => {

  // Have to have 1 containing element, can use Fragment if you don't want a container or div.
  // Use className in jsx instead of class because of conflicting js keywords.
  return (
    <section className="profile-card">
      <img className="profile-card__img" src={profileImg} alt={`${name}`}/>
      <h1 className="profile-card__title">{name}</h1>
      <ul className="profile-card__links">
        { twitter && <li>
          <a href={twitter} rel="noopener noreferrer" target="_blank">Twitter</a>
        </li> }
        { github && <li>
          <a href={github} rel="noopener noreferrer" target="_blank">Github</a>
        </li> }
        { codepen && <li>
          <a href={codepen} rel="noopener noreferrer" target="_blank">Codepen</a>
        </li> }
      </ul>
    </section>
  );
}

export default ProfileCard;