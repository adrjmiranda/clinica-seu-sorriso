import {
	A11y,
	Autoplay,
	Navigation,
	Pagination,
	Scrollbar,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Department183032 from '@/assets/departments/183032-department.webp';
import Department220258 from '@/assets/departments/220258-department.webp';
import Department261739 from '@/assets/departments/261739-department.webp';
import Department760951 from '@/assets/departments/760951-department.webp';
import Department792716 from '@/assets/departments/792716-department.webp';
import Department870034 from '@/assets/departments/870034-department.webp';
import type { Props as DepartmentCardProps } from '@/components/layout/DepartmentCard';
import DepartmentCard from '@/components/layout/DepartmentCard';
import SectionTitle from '@/components/layout/SectionTitle';

const items: Array<DepartmentCardProps> = [
	{
		id: 1,
		imgSrc: Department183032,
		name: 'Clareamento Dental',
		description:
			'Tratamentos seguros e eficazes para deixar seus dentes mais brancos e brilhantes.',
	},
	{
		id: 2,
		imgSrc: Department220258,
		name: 'Ortodontia',
		description:
			'Correção do alinhamento dos dentes e da mordida, proporcionando um sorriso perfeito.',
	},
	{
		id: 3,
		imgSrc: Department261739,
		name: 'Implantes Dentários',
		description:
			'Reposição de dentes perdidos com soluções definitivas e aparência natural.',
	},
	{
		id: 4,
		imgSrc: Department760951,
		name: 'Odontopediatria',
		description:
			'Cuidados especializados para a saúde bucal das crianças, desde os primeiros dentes.',
	},
	{
		id: 5,
		imgSrc: Department792716,
		name: 'Tratamento de Canal',
		description:
			'Recuperação de dentes comprometidos sem a necessidade de extração.',
	},
	{
		id: 6,
		imgSrc: Department870034,
		name: 'Limpeza e Prevenção',
		description:
			'Manutenção periódica para evitar cáries, gengivite e manter seu sorriso saudável.',
	},
];

export default function DepartmentsSection() {
	return (
		<section
			id="departamentos"
			className="vertical-wrapper bg-coconut"
		>
			<div className="horizontal-wrapper">
				<SectionTitle
					title="Nossos Departamentos"
					subtitle="Cada área da nossa clínica é cuidadosamente estruturada para oferecer tratamentos especializados, tecnologia de ponta e atendimento humanizado, garantindo o melhor cuidado para o seu sorriso."
				/>

				<div className="-mt-20">
					<Swiper
						modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
						slidesPerView={1}
						spaceBetween={0}
						breakpoints={{
							768: {
								slidesPerView: 2,
								spaceBetween: 30,
							},
							1024: {
								slidesPerView: 3,
								spaceBetween: 20,
							},
						}}
						pagination={{ clickable: true }}
						autoplay={{
							delay: 3000,
							disableOnInteraction: false,
						}}
					>
						{items.map((item) => (
							<SwiperSlide key={item.id}>
								<DepartmentCard {...item} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
}
