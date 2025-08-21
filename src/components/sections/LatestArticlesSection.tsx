import AritcleADS from '@/assets/articles/ads-article.webp';
import AritclePIG from '@/assets/articles/pig-article.webp';
import AritcleZED from '@/assets/articles/zed-article.webp';
import type { Props as LatestArticlesCardProps } from '@/components/layout/LatestArticlesCard';
import LatestArticlesCard from '@/components/layout/LatestArticlesCard';
import SectionTitle from '@/components/layout/SectionTitle';

const items: Array<LatestArticlesCardProps> = [
	{
		id: 1,
		imgSrc: AritcleADS,
		title: '5 Dicas Essenciais para Manter um Sorriso Saudável',
		summary:
			'Descubra cuidados simples que você pode adotar no dia a dia para prevenir cáries, manter gengivas saudáveis e preservar o brilho do seu sorriso.',
		date: new Date(),
		link: '#',
	},
	{
		id: 2,
		imgSrc: AritclePIG,
		title: 'Clareamento Dental: Tudo o que Você Precisa Saber',
		summary:
			'Entenda como funciona o clareamento, quais são os tipos disponíveis, os cuidados necessários e como manter os resultados por mais tempo.',
		date: new Date(),
		link: '#',
	},
	{
		id: 3,
		imgSrc: AritcleZED,
		title: 'Ortodontia Moderna: Sorrisos Perfeitos com Mais Conforto',
		summary:
			'Saiba como os avanços na ortodontia tornaram o tratamento mais rápido, discreto e confortável, garantindo resultados impressionantes.',
		date: new Date(),
		link: '#',
	},
];

export default function LatestArticlesSection() {
	return (
		<section
			id="ultimos-posts"
			className="vertical-wrapper"
		>
			<div className="horizontal-wrapper">
				<SectionTitle
					title="Dicas e Novidades do Mundo Odontológico"
					subtitle="Conteúdos preparados por nossos especialistas para ajudar você a cuidar melhor da sua saúde bucal."
				/>

				<div className="grid gap-6 md:grid-cols-3">
					{items.map((item) => (
						<LatestArticlesCard
							{...item}
							key={item.id}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
