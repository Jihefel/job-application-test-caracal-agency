import Link from 'next/link';

export default function BlueButtonLink({ children, className, href }: { children: React.ReactNode; className?: string; href: string }) {
	return (
		<Link href={href} className={`font-inter bg-blue-link hover:bg-blue-600 transition rounded-full uppercase tracking-[0.075rem] text-center font-normal ${className}`}>
			{children}
		</Link>
	);
}
