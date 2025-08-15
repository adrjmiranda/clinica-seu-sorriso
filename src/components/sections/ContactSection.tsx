import FormBg from '@/assets/banners/form.webp';
import SectionTitle from '@/components/layout/SectionTitle';

export default function ContactSection() {
	return (
		<section
			id="contato"
			className="vertical-wrapper"
		>
			<div className="horizontal-wrapper">
				<SectionTitle
					title="Entre em Contato Conosco"
					subtitle="Agende sua consulta, tire dúvidas ou solicite mais informações de forma rápida e simples."
				/>

				<div className="grid gap-8 md:grid-cols-2">
					<div
						style={{
							backgroundImage: `url(${FormBg})`,
						}}
						className="from-sky to-tutti rounded-sm bg-linear-to-b bg-cover bg-center p-6 shadow-lg"
					>
						<h2 className="mb-8 text-2xl font-medium text-white uppercase">
							Marcar uma Consulta
						</h2>
						<form
							action="#"
							className="flex flex-col gap-4"
						>
							<input
								type="text"
								name="name"
								placeholder="Seu nome"
								className="rounded-sm bg-white p-2"
							/>
							<input
								type="email"
								name="email"
								placeholder="Seu email"
								className="rounded-sm bg-white p-2"
							/>
							<input
								type="date"
								name="date"
								className="rounded-sm bg-white p-2"
							/>
							<textarea
								name="message"
								className="h-40 rounded-sm bg-white p-2"
								placeholder="Sua mensagem"
							></textarea>
							<button
								type="submit"
								className="btn"
							>
								Enviar
							</button>
						</form>
					</div>
					<div className="h-96 overflow-hidden rounded-sm shadow-lg md:h-auto">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d968.4119228301943!2d-40.09429593039238!3d-13.860173999158937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x740af6e1ad71e73%3A0x8a11c9f5fd31ae12!2sTv.%20Cap.%20Silvino%20de%20Ara%C3%BAjo%2C%20148%20-%20Joaquim%20Rom%C3%A3o%2C%20Jequi%C3%A9%20-%20BA!5e0!3m2!1spt-BR!2sbr!4v1755296148668!5m2!1spt-BR!2sbr"
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="h-full w-full"
						></iframe>
					</div>
				</div>
			</div>
		</section>
	);
}
