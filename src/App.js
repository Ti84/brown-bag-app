import React, { useState } from 'react';
import ProfileCard from './profile-card';

import './App.css';

import PEOPLE from './data/people';

// To Do:
// 1. Create script for live coding demo
// 2. Create startup app with css / etc so you only have to live code the react parts
// 3. Code profile card first in app component
// 4. Move profile card to its own component and show how it could become reusable
// 5. Create a sort / filter form - Filter by name, filter by dev type
// 6. Container component for list of profiles / filter form

// Setup fake api call to show example useEffect hook - explain useEffect (First param: function body happens on init / each rerender if the specified item changed, return a function to run a function after the component is unmounted, second param: specify what valuess to watch on rerender.)

// You only have an hour, setup a bit of the app ahead of time.

// For props.children explain how it is just the default param for jsx inside of the component tags but you can pass jsx and render it in the child component like you could for any javascript value.

const App = () => {
  let [searchValue, setSearchValue] = useState('');
  let [profileData] = useState(PEOPLE);
  let [filteredProfileData, setFilteredProfileData] = useState(profileData);

  const updateSearchValue = e => {
    setSearchValue(e.target.value);
    setFilteredProfileData(
      profileData.filter(profile =>
        profile.name.toLowerCase().startsWith(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="app">
      <section className="search">
        <h1>Awesome Developers to follow</h1>
        <input
          type="text"
          onChange={e => updateSearchValue(e)}
          value={searchValue}
          placeholder="Dev's Name"
        />
      </section>
      <section className="profiles">
        <ul className="grid-list grid-list--centered">
          {filteredProfileData &&
            filteredProfileData.map(
              ({ name, picture: profileImg, twitter, github, codepen }) => (
                <li key={name}>
                  <ProfileCard
                    profileImg={profileImg}
                    name={name}
                    twitter={twitter}
                    github={github}
                    codepen={codepen}
                  ></ProfileCard>
                </li>
              )
            )}
        </ul>
      </section>
    </div>
  );
};

export default App;
