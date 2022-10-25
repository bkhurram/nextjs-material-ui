import { Link, Typography } from "@mui/material";

export function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://mui.com/">
				Khurram Bashir
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}
