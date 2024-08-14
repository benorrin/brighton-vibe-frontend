// app/layout.tsx or app/layout.js
import React from 'react';
import { CssBaseline } from '@mui/material';
import Navbar from '../components/Navbar'; // Adjust the path as needed
import '../styles/globals.css'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
