import React, { useState, useEffect, Fragment } from 'react';
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
// 7. Create example card component ahead of time to show how you pass templates to child components.

// Setup fake api call to show example useEffect hook - explain useEffect (First param: function body happens on init / each rerender if the specified item changed, return a function to run a function after the component is unmounted, second param: specify what valuess to watch on rerender.)

// You only have an hour, setup a bit of the app ahead of time.

// For props.children explain how it is just the default param for jsx inside of the component tags but you can pass jsx and render it in the child component like you could for any javascript value.

// Make this car cards instead of developers.

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(true);
  let [profileData, setProfileData] = useState(null);

  const updateSearchValue = e => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      setProfileData(PEOPLE);
      setLoading(false);
    }, 1500);
  }, []);

  // Same as if (profileData) block.
  const createProfiles = () => {
    if (profileData) {
      const filteredData =
        profileData &&
        profileData.filter(profile =>
          profile.name.toLowerCase().startsWith(searchValue.toLowerCase())
        );

      return filteredData.map(
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
      );
    }
  };

  return (
    <div className="app">
      {loading && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
      {!loading && (
        <Fragment>
          <h1 className="title">Awesome Developers to follow</h1>
          <section className="search">
            {/* Pop this in its own component to show how to pass functions down as props */}
            <input
              type="text"
              onChange={e => updateSearchValue(e)}
              value={searchValue}
              placeholder="Dev's Name"
            />
          </section>
          <section className="profiles">
            <ul className="grid-list grid-list--centered">
              {createProfiles()}
            </ul>
          </section>
        </Fragment>
      )}
    </div>
  );
};

export default App;
