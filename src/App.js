import React from 'react';
import ProfileCard from './profile-card';

import './App.css';

import PEOPLE from './data/people';


// To Do:
// 1. Create script for live coding demo
// 2. Create startup app with css / etc so you only have to live code the react parts
// 3. Code profile card first in app component
// 4. Move profile card to its own component and show how it could become reusable
// 5. Create a dark / light mode toggle component to display how you manage state / pass functions to child
      // Demonstrate useState, etc.

// If you don't do it in the app, make sure to explain useEffect and explain how you can create your own custom hooks.

// REMEMBER YOU ONLY HAVE AN HOUR BRO

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
