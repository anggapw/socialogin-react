import React from 'react';

import ProfileContext from './Profile.context';
import ProfilePage from './ProfilePage';

const Profile = () => {
  let name = localStorage.getItem("name");
  let email = localStorage.getItem("email");
  let image = localStorage.getItem("image");

  const ProfileContextValue = {
    name,
    email,
    image,
  };

  return (
    <ProfileContext.Provider value={ProfileContextValue}>
      <ProfilePage />
    </ProfileContext.Provider>
  );
}

export default Profile;