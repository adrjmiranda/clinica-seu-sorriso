import { BsGeoFill } from 'react-icons/bs';
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
} from 'react-icons/fa';
import { MdMail, MdPhone } from 'react-icons/md';

export default function Topbar() {
	return (
		<div className="fixed inset-0 hidden h-12 w-full items-center bg-white text-gray-600 md:flex">
			<div className="horizontal-wrapper flex w-full justify-between">
				<address className="flex items-center gap-4">
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
						className="hover:text-sky transition-colors duration-300 ease-in-out"
					>
						<FaFacebookF />
					</a>
					<a
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-sky transition-colors duration-300 ease-in-out"
					>
						<FaLinkedinIn />
					</a>
					<a
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-sky transition-colors duration-300 ease-in-out"
					>
						<FaInstagram />
					</a>
					<a
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-sky transition-colors duration-300 ease-in-out"
					>
						<FaTwitter />
					</a>
				</div>
			</div>
		</div>
	);
}
