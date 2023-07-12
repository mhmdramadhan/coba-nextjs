import React from 'react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav>About Navbar</nav>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-600">{children}</main>
    </>
  );
};

export default RootLayout;
