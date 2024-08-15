import React from 'react';
import { Container, Grid, Link, Typography, Divider, Box, Stack } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer: React.FC = () => {
	return (
		<>
			<Divider sx={{ my: 3 }} />

			<footer style={{ backgroundColor: '#fff', padding: '40px 0' }}>
				<Container maxWidth="lg">
					<Grid container spacing={3} justifyContent="center">

						{/* Social Media */}
						<Grid item xs={12} sm={6} md={3}>
							<Stack spacing={1}>
								<Link href="https://facebook.com" color="inherit" underline="hover" display="flex" alignItems="center">
									<Facebook sx={{ mr: 1 }} />
									Facebook
								</Link>
								<Link href="https://twitter.com" color="inherit" underline="hover" display="flex" alignItems="center">
									<Twitter sx={{ mr: 1 }} />
									Twitter
								</Link>
								<Link href="https://instagram.com" color="inherit" underline="hover" display="flex" alignItems="center">
									<Instagram sx={{ mr: 1 }} />
									Instagram
								</Link>
							</Stack>
						</Grid>

						{/* Links */}
						<Grid item xs={12} sm={6} md={3}>
							<Link href="/about" color="inherit" underline="hover">
								About Us
							</Link>
							<br />
							<Link href="/contact" color="inherit" underline="hover">
								Contact
							</Link>
							<br />
							<Link href="/sitemap" color="inherit" underline="hover">
								Sitemap
							</Link>
							<br />
							<Link href="/api" color="inherit" underline="hover">
								API
							</Link>
						</Grid>

						{/* Legal Links */}
						<Grid item xs={12} sm={6} md={3}>
							<Link href="/terms" color="inherit" underline="hover">
								Terms of Service
							</Link>
							<br />
							<Link href="/privacy" color="inherit" underline="hover">
								Privacy Policy
							</Link>
							<br />
							<Link href="/gdpr" color="inherit" underline="hover">
								GDPR Compliance
							</Link>
						</Grid>
					</Grid>

					{/* Made with Love and Copyright Notice */}
					<Box textAlign="center" sx={{ mt: 6, pt: 2 }}>
						<Typography variant="body2" color="textSecondary">
							<Link href="https://orrin.uk" color="inherit" underline="hover">
								Made with ❤️ by Ben Orrin
							</Link>
						</Typography>
						<Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
							&copy; {new Date().getFullYear()} BrightonVi.be - All rights reserved.
						</Typography>
					</Box>
				</Container>
			</footer>
			</>
	);
};

export default Footer;