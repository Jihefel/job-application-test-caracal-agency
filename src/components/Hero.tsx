'use client';

import Image from 'next/image';
import heroImg from '/public/images/Hero.jpg';
import Container from './layouts/Container';
import Col from './layouts/Col';
import heroSvg from '/public/images/svg/hero-group.svg';
import Link from 'next/link';
import BlueButtonLink from './BlueButtonLink';
import { motion } from 'framer-motion';
import ArrowRight from './svg/ArrowRight';


function Hero() {
	return (
		<section id="hero" className="h-screen xl:h-[83vh] overflow-hidden relative text-white">
			<Image src={heroImg} alt="hero" className="object-top 3xl:object-center object-cover h-full w-full -z-10 inset-0 absolute" />
			<div className="absolute right-0 top-0 font-inter text-sm">
				<Image src={heroSvg} alt="hero-svg" className="right-0 top-0 hidden xl:block" />
				<div className="absolute top-[418px] right-[147px] w-[153px] h-[78px] hidden xl:block">
					<p>Every day we spend 90% of our time indoor.</p>
					<Link href={'#'} className="text-xs uppercase flex p-2 gap-4 border-b border-blue-link items-center">
						En savoir plus <ArrowRight height={16} />
					</Link>
				</div>
			</div>
			<Container className="h-full row-start-2 row-end-2">
				<Col colStart={3} colEnd={[25, null, null, null, 21]} className="mt-[99px] xl:mt-[521px]">
					<h1 className="text-[2rem] xl:text-[4.05rem] font-medium xl:leading-[4.5rem]">
						Every day, everywhere, <br className="hidden xl:inline" />
						you deserve to breathe clean air<span className="text-yellow-300">.</span>
					</h1>
				</Col>
				<Col colStart={3} className="flex items-end mb-24">
					<BlueButtonLink href="#" className="py-[1.375rem] px-9 text-xs xl:mt-12 md:w-fit">
						Découvrez nos expertises
					</BlueButtonLink>
				</Col>
			</Container>
			<div className="scroll-to-explore hidden lg:flex absolute bottom-0 right-[calc(100vw/27)] gap-6">
				<span className=" text-xs font-inter uppercase ">Défiler pour explorer</span>
				<svg width="1" height="86" viewBox="0 0 1 86" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M-4.07272e-09 86L3.75509e-06 -4.37111e-08L1 0L0.999996 86L-4.07272e-09 86Z" fill="white" />
					<motion.rect
						x="0"
						y="0"
						width="1"
						height="23"
						fill="goldenrod"
						initial={{ height: 0 }}
						animate={{ height: 86 }}
						transition={{ duration: 0.75, repeatType: 'mirror', repeat: Infinity, repeatDelay: 1 }}
					/>
				</svg>
			</div>
		</section>
	);
}

export default Hero;
