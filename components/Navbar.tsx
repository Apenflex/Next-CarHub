import Image from 'next/image'
import Link from 'next/link'

import { HeaderLinks } from './'

const Navbar = () => {
	return (
		<header className="header">
			<nav className="nav">
				<Link href="/" className="flex items-center justify-center">
					<Image src="/logo.svg" alt="Car Hub Logo" width={118} height={18} className="object-contain" />
				</Link>
				<HeaderLinks />
			</nav>
		</header>
	)
}

export default Navbar
