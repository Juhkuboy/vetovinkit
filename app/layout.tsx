import React from 'react';

export const metadata = {
  title: 'Your Page Title',
  description: 'Description of your page',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;