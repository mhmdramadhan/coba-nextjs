import React from 'react';
import Navbar from './components/Navbar';
import MyProfilePic from './components/MyProfilePic';

export const metadata = {
  title: 'Rama Blog',
  description: 'Created by ramadhan'
}

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <MyProfilePic />
      {children}
    </div>
  );
};

export default layout;
