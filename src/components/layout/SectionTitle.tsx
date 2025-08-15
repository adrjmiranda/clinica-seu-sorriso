type Props = {
	title: string;
	subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: Props) {
	return (
		<div className="mb-20 text-center">
			<h2 className="mb-4 text-3xl font-bold">{title}</h2>
			{subtitle != '' && (
				<p className="mx-auto max-w-3xl text-lg font-light text-gray-600">
					{subtitle}
				</p>
			)}
		</div>
	);
}
