import React from 'react';
import { Avatar } from 'rsuite';
import { getNameIntials } from '../misc/helpers';

const ProfileAvatar = ({ name, ...avatarProps }) => {
  return (
    <Avatar circle {...avatarProps}>
      {getNameIntials(name)}
    </Avatar>
  );
};

export default ProfileAvatar;
