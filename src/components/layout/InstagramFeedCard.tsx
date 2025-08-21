export type Props = {
	id: number;
	imgSrc: string;
};

export default function InstagramFeedCard({ imgSrc }: Props) {
	return (
		<div className="overflow-hidden rounded-sm">
			<img
				src={imgSrc}
				alt="Feed do Instagram"
			/>
		</div>
	);
}
