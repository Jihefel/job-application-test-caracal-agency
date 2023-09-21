'use client';

import Image from 'next/image';
import Col from './layouts/Col';
import Container from './layouts/Container';
import logo from '/public/images/svg/logo.svg';
import chevronDown from '/public/images/svg/chevron-down.svg';
import burgerIcon from '/public/images/menu-burger.png';
import search from '/public/images/svg/search.svg';
import Link from 'next/link';
import { links } from '../lib/data';
import BlueButtonLink from './BlueButtonLink';

function Navbar() {
	const handleDropdown = (link: string) => {};

	return (
		<header className="my-6 z-50 fixed w-full">
			<Container>
				<Col colStart={[3, null, null, null, 2]} colEnd={[13, null, null, null, 5]}>
					<Image src={logo} alt="Deltrian Logo" className="w-full self-center" />
				</Col>
				<Col colStart={[22, null, null, null, 6]} colEnd={[25, null, null, null, 26]} className="flex justify-end">
					<nav className="flex items-center text-white text-sm">
						{/* //SECTION - Nav mobile */}
						<button className="xl:hidden">
							<Image src={burgerIcon} alt="menu burger icon" />
						</button>
						{/* //TODO - Faire liens mobile */}
						{/* //!SECTION - Nav mobile */}

						{/* //SECTION - Nav XL */}
						<ul className=" gap-10 hidden xl:flex">
							{links.map((link) => (
								<li key={link.name} className="flex items-center gap-1">
									<Link href={link.path} className="hover:text-gray-300 transition">
										{link.name}
									</Link>
									{link.dropdown && (
										<button className="flex items-center" onClick={() => handleDropdown(link.name)}>
											<Image src={chevronDown} alt="chevron-down" />
										</button>
									)}
								</li>
							))}
							<li className="flex items-center">
								<button className="rounded-full aspect-square p-3 flex items-center justify-center bg-white/5 hover:bg-white/25 transition">
									<Image src={search} alt="search" />
								</button>
							</li>
							<li className="flex items-center text-[10px]">
								<BlueButtonLink className="py-[0.875rem] px-5" href='#'>Besoin d'aide ?</BlueButtonLink>
							</li>
						</ul>
						{/* //!SECTION - Nav XL */}
					</nav>
				</Col>
			</Container>
		</header>
	);
}

export default Navbar;
