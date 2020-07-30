import React, { useContext } from 'react';

import ProfileContext from './Profile.context';

const ProfilePage = () => {

  const {
    name,
    email,
    image,
  } = useContext(ProfileContext);

  return (
    <div>
      <div>Nama: {name}</div>
      <div>Email: {email}</div>
      <div><img src={image} alt="picture" /></div>
    </div>
  );
}

export default ProfilePage;