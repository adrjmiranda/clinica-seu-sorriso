import { useEffect, useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { MdOutlineClose } from 'react-icons/md';

import Logo from '@/components/layout/Logo';

export default function Navbar() {
	const [isScrolling, setIsScrolling] = useState<boolean>(false);
	const [menuIsActive, setMenuIsActive] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = (): void => {
			setIsScrolling(window.scrollY > 20);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav
			className={`${isScrolling ? 'bg-white' : 'bg-transparent'} sticky inset-0 z-20 flex h-20 items-center transition-colors duration-300 ease-in-out`}
		>
			<div className="horizontal-wrapper flex w-full justify-between">
				<Logo />

				<button
					type="button"
					className="text-sky items-center justify-center text-4xl md:hidden"
					onClick={() => setMenuIsActive((previous) => !previous)}
				>
					{menuIsActive ? <MdOutlineClose /> : <IoMenu />}
				</button>

				<ul
					className={`${menuIsActive ? 'top-20 opacity-100' : '-top-96 opacity-0'} absolute flex w-[calc(100vw---spacing(4))] flex-col items-center gap-3 rounded-sm bg-white/80 py-4 text-sm font-normal uppercase transition-all duration-500 ease-in-out md:relative md:top-0 md:w-auto md:flex-row md:gap-6 md:bg-transparent md:py-0 md:opacity-100`}
				>
					<li>
						<a
							href="#home"
							className="hover:text-sky"
							onClick={() => setMenuIsActive((previous) => !previous)}
						>
							Home
						</a>
					</li>

					<li>
						<a
							href="#servicos"
							className="hover:text-sky"
							onClick={() => setMenuIsActive((previous) => !previous)}
						>
							Serviços
						</a>
					</li>

					<li>
						<a
							href="#sobre"
							className="hover:text-sky"
							onClick={() => setMenuIsActive((previous) => !previous)}
						>
							Sobre
						</a>
					</li>

					<li>
						<a
							href="#departamentos"
							className="hover:text-sky"
							onClick={() => setMenuIsActive((previous) => !previous)}
						>
							Departamentos
						</a>
					</li>

					<li>
						<a
							href="#contato"
							className="hover:text-sky"
							onClick={() => setMenuIsActive((previous) => !previous)}
						>
							Contato
						</a>
					</li>

					<li>
						<a
							href="#nosso-time"
							className="hover:text-sky"
							onClick={() => setMenuIsActive((previous) => !previous)}
						>
							Nosso time
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
