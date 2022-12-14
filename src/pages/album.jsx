import * as React from 'react';
import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Album.module.css';
import banner from '/src/assets/banner-image.jpg';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
	return (<>
		<Layout>
			{/* Hero unit */}
			<section className={styles.banner}>
				<Image
					layout="fill"
					src={banner}
					placeholder="blur"
					quality={100}
					sizes="100vw"
					alt="banner home"
				/>
				<Container className={styles.container}>
					<h1>My awesome website</h1>
					<h2>Look at this website and bask in its amazing glory!</h2>
					<a href="https://example.com/" className={styles.btn}>Go ahead...</a>
				</Container>
			</section>
			<Box
				sx={{
					bgcolor: 'background.paper',
					pt: 8,
					pb: 6,
				}}
			>
				<Container maxWidth="sm">
					<Typography
						component="h1"
						variant="h2"
						align="center"
						color="text.primary"
						gutterBottom
					>
						Album layout
					</Typography>
					<Typography variant="h5" align="center" color="text.secondary" paragraph>
						Something short and leading about the collection below—its contents,
						the creator, etc. Make it short and sweet, but not too short so folks
						don&apos;t simply skip over it entirely.
					</Typography>
					<Stack
						sx={{ pt: 4 }}
						direction="row"
						spacing={2}
						justifyContent="center"
					>
						<Button variant="contained">Main call to action</Button>
						<Button variant="outlined">Secondary action</Button>
					</Stack>
				</Container>
			</Box>
			<Container sx={{ py: 8 }} maxWidth="md">
				{/* End hero unit */}
				<Grid container spacing={4}>
					{cards.map((card) => (
						<Grid item key={card} xs={12} sm={6} md={4}>
							<Card
								sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
							>
								<CardMedia
									component="img"
									image="https://source.unsplash.com/random"
									alt="random"
								/>
								<CardContent sx={{ flexGrow: 1 }}>
									<Typography gutterBottom variant="h5" component="h2">
										Heading
									</Typography>
									<Typography>
										This is a media card. You can use this section to describe the
										content.
									</Typography>
								</CardContent>
								<CardActions>
									<Button size="small">View</Button>
									<Button size="small">Edit</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</Layout>
	</>
	);
}
