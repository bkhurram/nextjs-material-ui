import React from 'react'
import { CssBaseline } from '@mui/material'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
	return (
		<>
			<CssBaseline />
			<Header />
			<main>
				{children}
			</main>
			<Footer />
		</>
	)
}

export default Layout
