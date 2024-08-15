import React from 'react';
import { CssBaseline } from '@mui/material';
import Navbar from '../components/Navbar';
import '../styles/globals.css'
import Footer from '../components/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<CssBaseline />
				<Navbar />
				<main>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
};

export default Layout;