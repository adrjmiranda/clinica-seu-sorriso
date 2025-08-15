import {
	RiFacebookFill,
	RiLinkedinBoxLine,
	RiPinterestLine,
	RiTwitterXLine,
} from 'react-icons/ri';

export type Props = {
	id: number;
	imgSrc: string;
	name: string;
	specialty: string;
	description: string;
	facebookLink: string;
	xLink: string;
	linkedinLink: string;
	pinterestLink: string;
};

export default function OurTeamCard({
	imgSrc,
	name,
	specialty,
	description,
	facebookLink,
	xLink,
	linkedinLink,
	pinterestLink,
}: Props) {
	return (
		<div className="group flex h-[512px] flex-col overflow-hidden rounded-sm bg-white text-center shadow-lg/5 transition-all duration-300 ease-in-out hover:scale-[101%] hover:shadow-lg/15 sm:h-[768px] md:h-[512px]">
			<img
				src={imgSrc}
				alt={name}
				className="h-1/2 w-full object-cover object-[0%_10%] sm:object-[0%_15%] md:object-[0%_10%]"
			/>
			<div className="from-sky to-tutti bg-coconut group py-3 transition-all duration-300 ease-in-out group-hover:bg-linear-to-r">
				<h4 className="text-dark group-hover:text-white">{name}</h4>
				<p className="text-gray-400 group-hover:text-gray-200">{specialty}</p>
			</div>
			<div className="flex flex-1 flex-col justify-center gap-4 p-4">
				<p className="text-base font-light text-gray-600">{description}</p>
				<div className="flex items-center justify-center gap-4 text-gray-600">
					<a
						href={facebookLink}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-sky"
					>
						<RiFacebookFill />
					</a>
					<a
						href={linkedinLink}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-sky"
					>
						<RiLinkedinBoxLine />
					</a>
					<a
						href={xLink}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-sky"
					>
						<RiTwitterXLine />
					</a>
					<a
						href={pinterestLink}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-sky"
					>
						<RiPinterestLine />
					</a>
				</div>
			</div>
		</div>
	);
}
