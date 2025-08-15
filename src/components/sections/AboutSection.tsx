import AboutImg from '@/assets/about/clinic.webp';

export default function AboutSection() {
	return (
		<section
			id="sobre"
			className="vertical-wrapper"
		>
			<div className="horizontal-wrapper grid gap-8 md:grid-cols-2">
				<div className="bg-tutti/80 relative h-92 rounded-sm md:h-auto">
					<img
						src={AboutImg}
						alt="Sobre Nossa Clínica"
						className="relative top-4 -right-4 h-9/10 w-9/10 translate-0 rounded-sm object-cover object-center sm:absolute sm:top-1/2 sm:-right-48 sm:w-full sm:-translate-1/2 md:-right-52 lg:-right-72"
					/>
				</div>
				<div className="border-coconut flex min-h-96 flex-col gap-4 rounded-sm border-12 bg-white p-6">
					<h2 className="text-2xl">Sobre Nossa Clínica</h2>
					<p>
						Na Clínica Seu Sorriso, nosso compromisso é com a saúde e bem-estar
						de cada paciente. Contamos com uma equipe de dentistas
						especializados e tecnologia moderna para oferecer tratamentos
						seguros e eficazes, garantindo que seu sorriso esteja sempre
						saudável e bonito.
					</p>
					<p>
						Valorizamos o atendimento humanizado e personalizado, entendendo que
						cada sorriso é único. Desde a primeira consulta até os tratamentos
						mais complexos, nosso objetivo é proporcionar conforto, confiança e
						resultados que transformem vidas.
					</p>
					<a
						href="#"
						className="btn"
					>
						Saiba mais
					</a>
				</div>
			</div>
		</section>
	);
}
