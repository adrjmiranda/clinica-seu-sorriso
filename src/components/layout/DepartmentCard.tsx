export type Props = {
	id: number;
	imgSrc: string;
	name: string;
	description: string;
};

export default function DepartmentCard({ imgSrc, name, description }: Props) {
	return (
		<div className="h-96 cursor-pointer overflow-hidden rounded-sm bg-white shadow-lg/5 transition-all duration-300 hover:scale-105 hover:shadow-lg/15">
			<img
				src={imgSrc}
				alt={name}
				className="h-3/5 w-full object-cover object-center"
			/>
			<div className="space-y-4 p-4 text-center">
				<h3 className="text-lg font-medium uppercase">{name}</h3>
				<p className="font-light text-gray-600">{description}</p>
			</div>
		</div>
	);
}
