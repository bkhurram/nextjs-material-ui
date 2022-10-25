import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

export default function Contact() {

	return (
		<Layout>
			<Container>

				<Typography variant="h6" gutterBottom sx={{ paddingTop: 3 }}>
					Contact us
				</Typography>

				<ContactForm />

			</Container>
		</Layout >
	);
}
