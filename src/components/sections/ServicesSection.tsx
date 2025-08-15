import { FaChild, FaSmile, FaTeethOpen, FaTooth } from 'react-icons/fa';
import { GiMedicalPack, GiToothbrush } from 'react-icons/gi';

import type { Props as ServiceCardProps } from '@/components/layout/ServiceCard';
import ServiceCard from '@/components/layout/ServiceCard';

import SectionTitle from '../layout/SectionTitle';

const items: Array<ServiceCardProps> = [
	{
		id: 1,
		Icon: FaTooth,
		title: 'Limpeza e Prevenção',
		description:
			'Manutenção periódica para evitar cáries, gengivite e manter seu sorriso saudável.',
	},
	{
		id: 2,
		Icon: FaSmile,
		title: 'Clareamento Dental',
		description:
			'Tratamento seguro e eficaz para deixar seus dentes mais brancos e brilhantes.',
	},
	{
		id: 3,
		Icon: GiToothbrush,
		title: 'Ortodontia',
		description:
			'Correção do alinhamento dos dentes e mordida para um sorriso perfeito e saudável.',
	},
	{
		id: 4,
		Icon: GiMedicalPack,
		title: 'Implantes Dentários',
		description:
			'Solução definitiva para reposição de dentes perdidos com aparência natural.',
	},
	{
		id: 5,
		Icon: FaChild,
		title: 'Odontopediatria',
		description:
			'Cuidados especiais para a saúde bucal das crianças, desde os primeiros dentes.',
	},
	{
		id: 6,
		Icon: FaTeethOpen,
		title: 'Tratamento de Canal',
		description:
			'Recuperação de dentes comprometidos sem a necessidade de extração.',
	},
];

export default function ServicesSection() {
	return (
		<section
			id="servicos"
			className="vertical-wrapper"
		>
			<div className="horizontal-wrapper">
				<SectionTitle
					title="Nossos Serviços Odontológicos"
					subtitle="Oferecemos tratamentos completos para cuidar da saúde e estética do seu sorriso."
				/>

				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{items.map((item) => (
						<ServiceCard
							{...item}
							key={item.id}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
