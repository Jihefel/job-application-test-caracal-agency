'use client';

import Link from 'next/link';
import { boxesCTA } from '../lib/data';
import TitleSection from './TitleSection';
import Col from './layouts/Col';
import Container from './layouts/Container';
import ArrowRight from './svg/ArrowRight';
import { useMemo } from 'react';

function CTA() {
	return (
		<section id="cta" className="bg-blue-medium py-11">
			<Container className="hidden xl:grid">
				<Col colEnd={3}>
					<span className="mr-4 h-[1px] bg-[#AECBE3]" />
				</Col>
				<TitleSection color="white">Partout, au quotidien,vous méritez de respirer un air purifié.</TitleSection>
			</Container>
			<Container className="py-11">
				<Col colStart={3}>
					<div className="flex flex-col xl:flex-row xl:items-center gap-4 h-[442px]">
						{boxesCTA.map((box) => (
							<BoxCTA box={box} key={box.name} />
						))}
					</div>
				</Col>
			</Container>
		</section>
	);
}

export default CTA;

type boxtype = (typeof boxesCTA)[number];

function BoxCTA({ box }: { box: boxtype }) {
	const colorBg = useMemo(() => {
		if (box.color === '#1EA5AA') return 'hover:bg-[#1EA5AA]';
		if (box.color === '#287DE4') return 'hover:bg-[#287DE4]';
		return "hover:bg-[#FFC600]"
	}, [box.color]);

	return (
		<div
			className={`box group flex xl:flex-col bg-[#05194C] ${colorBg} rounded-[10px] xl:w-1/3 items-center justify-center text-center py-12 px-20 hover:w-[35%] aspect-square transition-all cursor-pointer duration-300 h-[390px] hover:h-[430px]`}
		>
			<div className="svg w-full max-w-[220px]">{box.svg}</div>
			<div className="text mt-14">
				<span className="">{box.name}</span>
				<p className="hidden xl:group-hover:block transition-all duration-300 mt-4">{box.description}</p>
			</div>
			<div className={`mt-6 text-white group-hover:text-[${box.color}]`}>
				<Link href={box.path} className="block border border-white rounded-full p-2 group-hover:p-6 group-hover:rotate-90 transition-all duration-300">
					<ArrowRight height={20} />
				</Link>
			</div>
		</div>
	);
}
