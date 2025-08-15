import LogoImg from '@/assets/logo.png';

export default function Logo() {
	return (
		<a
			href="/"
			className="flex items-center gap-2"
		>
			<img
				src={LogoImg}
				alt="Logo"
				className="h-6"
			/>
			<span className="font-title text-2xl font-medium">Seu Sorriso</span>
		</a>
	);
}
