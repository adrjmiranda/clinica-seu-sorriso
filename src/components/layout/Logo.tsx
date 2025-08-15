import LogoImg from '@/assets/logo.png';

export default function Logo() {
	return (
		<a
			href="/"
			className="flex flex-nowrap items-center justify-start gap-2"
		>
			<img
				src={LogoImg}
				alt="Logo"
				className="mb-1 h-6"
			/>
			<span className="text-4xl font-medium text-nowrap">
				<span className="text-tutti font-special">Seu</span>
				<span className="text-sky font-special">Sorriso</span>
			</span>
		</a>
	);
}
