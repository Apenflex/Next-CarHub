import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'

import { Footer, Navbar } from '@/components'
import ScrollUp from '@/components/ScrollUp'

export const metadata: Metadata = {
	title: 'Car Hub',
	description: 'Discover the best cars in the world',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="relative">
				<Toaster />
				<Navbar />
				<ScrollUp />
          {children}
        <Footer />
      </body>
		</html>
	)
}
