import { Container } from '@mui/material'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthProvider from './auth/Provider'
import NavBar from './components/NavBar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create  NextAuth Next App',
	description: 'this app for practice nextjs and next-auth',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<AuthProvider>
					<NavBar />
					<Container sx={{ my: 5 }}>{children}</Container>
				</AuthProvider>
			</body>
		</html>
	)
}
