import { BsGeoFill } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdMail, MdPhone } from 'react-icons/md';

export default function Topbar() {
	return (
		<div className="relative z-10 hidden h-12 w-full items-center bg-white/70 text-gray-600 md:flex">
			<div className="horizontal-wrapper flex w-full justify-between">
				<address className="flex items-center gap-4 text-sm uppercase">
					<p className="flex items-center gap-1">
						<MdPhone />
						<span>Fale conosco +55 73 3525-6518</span>
					</p>
					<p className="flex items-center gap-1">
						<MdMail />
						<a href="mailto:seusorriso@contato.com">seusorriso@contato.com</a>
					</p>
					<p className="flex items-center gap-1">
						<BsGeoFill />
						<span>Nossa localização</span>
					</p>
				</address>

				<div className="flex items-center gap-4">
					<a
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-tutti"
					>
						<FaFacebookF />
					</a>
					<a
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-tutti"
					>
						<FaLinkedinIn />
					</a>
					<a
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-tutti"
					>
						<FaInstagram />
					</a>
					<a
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-tutti"
					>
						<FaXTwitter />
					</a>
				</div>
			</div>
		</div>
	);
}
