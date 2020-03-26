import { useState } from 'react';

const useFilter = initialState => {
  let [profileData, setProfileData] = useState(initialState);
  let [filteredProfileData, setFilteredProfileData] = useState(initialState);

  const setDataToFilter = data => {
    setProfileData(data);
    setFilteredProfileData(data);
  };

  const filterData = filterString => {
    setFilteredProfileData(
      profileData.filter(profile =>
        profile.name.toLowerCase().startsWith(filterString.toLowerCase())
      )
    );
  };
  return [filteredProfileData, setDataToFilter, filterData];
};

export default useFilter;
