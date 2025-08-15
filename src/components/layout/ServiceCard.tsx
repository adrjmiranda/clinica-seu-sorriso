import type { IconType } from 'react-icons';

export type Props = {
	id: number;
	Icon: IconType;
	title: string;
	description: string;
};

export default function ServiceCard({ Icon, title, description }: Props) {
	return (
		<div className="bg-coconut flex cursor-pointer flex-col items-center justify-center gap-4 rounded-sm px-6 py-10 text-center shadow transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white hover:shadow-lg">
			<Icon className="text-sky text-5xl" />
			<h3 className="mb-2 text-lg font-medium uppercase">{title}</h3>
			<p className="text-base font-light text-gray-600">{description}</p>
		</div>
	);
}
