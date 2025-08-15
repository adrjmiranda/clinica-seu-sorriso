import AizaTrueImg from '@/assets/team/Aiza True.webp';
import NaraPeraImg from '@/assets/team/Nara Pera.webp';
import ZingYangImg from '@/assets/team/Zing Yang.webp';
import ZoeLongImg from '@/assets/team/Zoe Long.webp';
import type { Props as OurTeamCardProps } from '@/components/layout/OurTeamCard';
import OurTeamCard from '@/components/layout/OurTeamCard';
import SectionTitle from '@/components/layout/SectionTitle';

const items: Array<OurTeamCardProps> = [
	{
		id: 1,
		imgSrc: AizaTrueImg,
		name: 'Aiza True',
		specialty: 'Ortodontista',
		description:
			'Especialista em correção de alinhamento dental e mordida, ajudando pacientes a conquistarem um sorriso harmonioso e funcional.',
		facebookLink: '#',
		linkedinLink: '#',
		xLink: '#',
		pinterestLink: '#',
	},
	{
		id: 2,
		imgSrc: NaraPeraImg,
		name: 'Nara Pera',
		specialty: 'Implantodontista',
		description:
			'Focada em soluções avançadas para reposição de dentes, devolvendo estética e confiança com técnicas modernas de implantes.',
		facebookLink: '#',
		linkedinLink: '#',
		xLink: '#',
		pinterestLink: '#',
	},
	{
		id: 3,
		imgSrc: ZingYangImg,
		name: 'Zing Yang',
		specialty: 'Odontopediatra',
		description:
			'Apaixonado pelo cuidado infantil, garante que cada criança tenha uma experiência positiva e segura no consultório.',
		facebookLink: '#',
		linkedinLink: '#',
		xLink: '#',
		pinterestLink: '#',
	},
	{
		id: 4,
		imgSrc: ZoeLongImg,
		name: 'Zoe Long',
		specialty: 'Dentista Estética',
		description:
			'Especialista em estética dental, transformando sorrisos com clareamentos, facetas e tratamentos personalizados.',
		facebookLink: '#',
		linkedinLink: '#',
		xLink: '#',
		pinterestLink: '#',
	},
];

export default function OurTeamSection() {
	return (
		<section
			id="nosso-time"
			className="vertical-wrapper bg-coconut"
		>
			<div className="horizontal-wrapper">
				<SectionTitle
					title="Nosso Time de Especialistas"
					subtitle="Conheça os profissionais dedicados que trabalham para transformar sorrisos todos os dias."
				/>

				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
					{items.map((item) => (
						<OurTeamCard
							{...item}
							key={item.id}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
