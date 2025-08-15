import Banner360x640 from '@/assets/banners/360x640.webp';
import Banner414x896 from '@/assets/banners/414x896.webp';
import Banner768x1024 from '@/assets/banners/768x1024.webp';
import Banner1366x768 from '@/assets/banners/1366x768.webp';
import Banner1920x1080 from '@/assets/banners/1920x1080.webp';
import Banner3840x2160 from '@/assets/banners/3840x2160.webp';

export default function HeroSection() {
	return (
		<header
			id="home"
			className="vertical-wrapper relative z-0 -mt-32 flex min-h-[728px] md:min-h-[962px]"
		>
			<picture className="absolute inset-0 z-0 h-full w-full">
				<source
					media="(max-width: 360px)"
					srcSet={Banner360x640}
				/>
				<source
					media="(max-width: 414px)"
					srcSet={Banner414x896}
				/>
				<source
					media="(max-width: 768px)"
					srcSet={Banner768x1024}
				/>
				<source
					media="(max-width: 1366px)"
					srcSet={Banner1366x768}
				/>
				<source
					media="(max-width: 1920px)"
					srcSet={Banner1920x1080}
				/>
				<img
					src={Banner3840x2160}
					alt="Maternidade em Feltro"
					className="absolute inset-0 h-full w-full object-cover object-center"
					loading="eager"
				/>
			</picture>

			<div className="horizontal-wrapper relative z-10 flex-1">
				<div className="flex h-full flex-col justify-center md:max-w-1/2">
					<h1 className="font-special text-deep mb-2 text-4xl leading-8 min-[262px]:text-5xl min-[262px]:leading-10 sm:text-6xl sm:leading-12 md:text-7xl md:leading-14 lg:text-8xl lg:leading-20">
						Seu Sorriso,
						<br />
						Nossa Prioridade
					</h1>
					<h2 className="mb-8 text-lg font-light text-gray-900 sm:text-xl sm:text-gray-600">
						Tratamentos odontológicos de qualidade, com tecnologia moderna e
						cuidado humano para transformar a saúde e a beleza do seu sorriso.
					</h2>
					<a
						href="#"
						className="btn"
					>
						Marcar consulta
					</a>
				</div>
			</div>
		</header>
	);
}
