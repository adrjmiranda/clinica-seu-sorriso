export type Props = {
	id: number;
	imgSrc: string;
	title: string;
	summary: string;
	link: string;
	date: Date;
};

export default function LatestArticlesCard({
	imgSrc,
	title,
	summary,
	link,
	date,
}: Props) {
	return (
		<div className="group relative h-96 overflow-hidden rounded-sm">
			<img
				src={imgSrc}
				alt={title}
				className="h-1/2 w-full object-cover object-center"
			/>
			<span className="bg-sky absolute bottom-42 left-4 rounded-sm p-2 text-white">
				{date.toLocaleDateString('pt-BR', {
					day: 'numeric',
					month: 'long',
					year: 'numeric',
				})}
			</span>
			<div className="flex h-1/2 flex-col justify-between px-4">
				<div className="flex flex-1 flex-col items-center justify-center gap-3">
					<h3 className="group-hover:text-sky line-clamp-1 text-base text-ellipsis transition-colors sm:text-lg">
						{title}
					</h3>
					<p className="line-clamp-2 text-ellipsis">{summary}</p>
				</div>
				<a
					href={link}
					className="hover:text-sky mb-2 text-sm uppercase"
				>
					Ler mais
				</a>
			</div>
		</div>
	);
}
