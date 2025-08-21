import { CgHeart } from 'react-icons/cg';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import InstagramFeedImg1 from '@/assets/instagram-feed/045307.webp';
import InstagramFeedImg2 from '@/assets/instagram-feed/305289.webp';
import InstagramFeedImg3 from '@/assets/instagram-feed/324852.webp';
import InstagramFeedImg4 from '@/assets/instagram-feed/334226.webp';
import InstagramFeedImg5 from '@/assets/instagram-feed/474230.webp';
import InstagramFeedImg6 from '@/assets/instagram-feed/700038.webp';
import InstagramFeedImg7 from '@/assets/instagram-feed/730582.webp';
import InstagramFeedImg8 from '@/assets/instagram-feed/814234.webp';
import type { Props as InstagramFeedCardProps } from '@/components/layout/InstagramFeedCard';
import InstagramFeedCard from '@/components/layout/InstagramFeedCard';

const instagramFeedItems: Array<InstagramFeedCardProps> = [
	{
		id: 1,
		imgSrc: InstagramFeedImg1,
	},
	{
		id: 2,
		imgSrc: InstagramFeedImg2,
	},
	{
		id: 3,
		imgSrc: InstagramFeedImg3,
	},
	{
		id: 4,
		imgSrc: InstagramFeedImg4,
	},
	{
		id: 5,
		imgSrc: InstagramFeedImg5,
	},
	{
		id: 6,
		imgSrc: InstagramFeedImg6,
	},
	{
		id: 7,
		imgSrc: InstagramFeedImg7,
	},
	{
		id: 8,
		imgSrc: InstagramFeedImg8,
	},
];

export default function Footer() {
	return (
		<footer className="vertical-wrapper bg-deep text-white">
			<div className="horizontal-wrapper grid gap-8 md:grid-cols-2 lg:grid-cols-4">
				<div className="flex flex-col gap-6 lg:col-span-1">
					<h4 className="text-lg font-semibold uppercase sm:text-xl">
						Principais Serviços
					</h4>
					<ul className="flex flex-col gap-2 font-normal">
						<li>
							<a href="#servicos">Limpeza e Prevenção</a>
						</li>
						<li>
							<a href="#servicos">Clareamento Dental</a>
						</li>
						<li>
							<a href="#servicos">Ortodontia</a>
						</li>
						<li>
							<a href="#servicos">Implantes Dentários</a>
						</li>
					</ul>
				</div>

				<div className="flex flex-col gap-6 lg:col-span-2">
					<h4 className="text-lg font-semibold uppercase sm:text-xl">
						Newsletter
					</h4>
					<form
						action="#"
						className="flex items-stretch gap-2"
					>
						<input
							type="email"
							placeholder="Seu melhor email"
							name="email"
							className="flex-1 rounded-sm border-0 bg-white px-3 font-normal text-gray-800 outline-0 placeholder:font-light placeholder:text-gray-500"
						/>
						<button className="btn">Enviar</button>
					</form>
				</div>

				<div className="flex flex-col gap-6 md:col-span-2 lg:col-span-1">
					<h4 className="text-lg font-semibold uppercase sm:text-xl">
						Feed do Instagram
					</h4>
					<div className="grid grid-cols-4 gap-2">
						{instagramFeedItems.map((item) => (
							<InstagramFeedCard
								{...item}
								key={item.id}
							/>
						))}
					</div>
				</div>

				<div className="order-5 md:col-span-2 lg:col-span-2">
					<p className="flex items-center justify-center gap-1 text-sm font-extralight lg:justify-end">
						Copyright ©2025 Todos os direitos reservados | Made with{' '}
						<CgHeart className="text-red-600" /> by{' '}
						<a
							href="https://github.com/adrjmiranda"
							target="_blank"
							className="text-tutti font-light"
						>
							Adriano Miranda
						</a>
					</p>
				</div>

				<div className="flex justify-center gap-3 md:col-span-2 lg:col-span-2 lg:justify-start">
					<a
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-tutti flex items-center justify-center rounded-sm bg-white p-2 text-gray-600"
					>
						<FaFacebookF />
					</a>
					<a
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-tutti flex items-center justify-center rounded-sm bg-white p-2 text-gray-600"
					>
						<FaLinkedinIn />
					</a>
					<a
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-tutti flex items-center justify-center rounded-sm bg-white p-2 text-gray-600"
					>
						<FaInstagram />
					</a>
					<a
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-tutti flex items-center justify-center rounded-sm bg-white p-2 text-gray-600"
					>
						<FaXTwitter />
					</a>
				</div>
			</div>
		</footer>
	);
}
