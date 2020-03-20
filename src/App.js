import React from 'react';
import ProfileCard from './profile-card';

import './App.css';

import PEOPLE from './data/people';

const App = () => {
  return (
    <div className="app">
      {/* Turn this into a component and pass this as props.children */}
      <section className="profiles">
        <h1>Awesome Developers to follow</h1>
        <div className="grid grid--centered">
          {PEOPLE &&
            PEOPLE.map(
              ({ name, picture: profileImg, twitter, github, codepen }) => (
                <ProfileCard
                  key={name}
                  profileImg={profileImg}
                  name={name}
                  twitter={twitter}
                  github={github}
                  codepen={codepen}
                ></ProfileCard>
              )
            )}
        </div>
      </section>
    </div>
  );
};

export default App;
