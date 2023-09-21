import Col from './layouts/Col';

export default function TitleSection({ children, color }: { children: React.ReactNode; color: string }) {
	return (
		<>
			<Col colStart={3}>
				<h2 className="uppercase text-blue-link font-inter font-semibold text-[0.625rem] -translate-y-2 tracking-[0.0875rem]">Totor</h2>
			</Col>
			<Col colStart={3} colEnd={13}>
				<h3 className={`text-3xl leading-[2.375rem] mt-3 text-${color}`}>{children}</h3>
			</Col>
		</>
	);
}
